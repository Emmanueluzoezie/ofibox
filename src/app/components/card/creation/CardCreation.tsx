"use client"
import React, { useEffect, useState } from 'react'
import CreateCardButtons from './CreateCardButtons'
import DisplayCard from './DisplayCard'
import TempleteComponent from './TempleteComponent'
import { useRouter } from 'next/navigation'
import { selectShowLoginButton, selectShowLoginScreen, setLoadingState, setShowLoginButton, setShowLoginScreen } from '@/slice/AppSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import LoginPermission from '../../login/LoginPermission'
import { MdKeyboardBackspace } from "react-icons/md";
import { selectActionInput, selectCardToImage, selectCurrentTemplate, selectCurrentTemplateId, selectImageInput, selectPriceInput, selectRankInput, selectRuleInput, selectShowAccessible, selectShowPermissionToProceed, selectThemeInput, selectTitleInput, selectTollAmount, selectTollInput, selectTypeOfCard, setActionInput, setCardToImage, setImageInput, setPriceInput, setRankInput, setRuleInput, setShowAccessibilty, setShowPermissionToProceed, setThemeInput, setTitleInput, setTollInput, setTypeOfCard } from '@/slice/CardSlice'
import { selectAmountToBeDebited, selectIsPaymentCompleted, setAmountToBeDebited, setShowPaymentModal } from '@/slice/PaymentSlice'
import * as htmlToImage from 'html-to-image';
import axios from 'axios'
import PermissionToProceedComponent from './PermissionToProceedComponent'

const CardCreation = () => {
  const [isCreationFunctionCalled, setIsCreationFunctionCalled] = useState(false)

  const router = useRouter()
  const dispatch = useDispatch()

  const { user } = useDynamicContext()


  const showLoginScreen = useSelector(selectShowLoginScreen)
  const showLoginPermission = useSelector(selectShowLoginButton)
  const showPermissionToProceed = useSelector(selectShowPermissionToProceed)
  const isPaymentCompleted = useSelector(selectIsPaymentCompleted)
  const titleInput = useSelector(selectTitleInput)
  const actionInput = useSelector(selectActionInput)
  const priceInput = useSelector(selectPriceInput)
  const rankInput = useSelector(selectRankInput)
  const ruleInput = useSelector(selectRuleInput)
  const themeInput = useSelector(selectThemeInput)
  const tollInput = useSelector(selectTollInput)
  const cardToImage = useSelector(selectCardToImage)
  const imageInput = useSelector(selectImageInput)
  const currentTemplateId = useSelector(selectCurrentTemplateId)
  const currentTemplate = useSelector(selectCurrentTemplate)
  const tollCurrency = useSelector(selectCurrentTemplateId)
  const tollAmount = useSelector(selectTollAmount)
  const creationAmount = useSelector(selectAmountToBeDebited)
  const showAccessibility = useSelector(selectShowAccessible)
  const accessibiltyType = useSelector(selectTypeOfCard)

  const preset_key = process.env.NEXT_PUBLIC_PRESET_KEY
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME
  const element = document.getElementById(currentTemplateId);



  const handleShowPermission = async () => { 

    try{
      dispatch(setLoadingState({
        state: true,
        type: "circle"
      }))
  
      if (user === undefined) {
        dispatch(setShowLoginButton(true))
        return
      }
  
      const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
  
      const total =   (creationAmount.creation + creationAmount.template) / (response.data.solana.usd)
  
      dispatch(setAmountToBeDebited({
        creation: creationAmount.creation,
        template: creationAmount.template,
        total: Number(total.toFixed(4))
      }))
  
      dispatch(setShowPermissionToProceed(true))
    }catch(error){

    } finally {
      dispatch(setLoadingState({
        state: false,
        type: ""
      }))
    }
  }

  const handleCardCreation = async () => {
    console.log("CLicked")
    try {
      dispatch(setShowPermissionToProceed(false));
      setIsCreationFunctionCalled(true)

      dispatch(setLoadingState({
        state: true,
        type: "circle"
      }))

      if (user === undefined) {
        dispatch(setShowLoginButton(true))
        return
      }

      if (user.verifiedCredentials[0].address === undefined) {
        dispatch(setShowLoginButton(true))
        return
      }

      if (!isPaymentCompleted) {
        dispatch(setShowPaymentModal(true))
        dispatch(setShowPermissionToProceed(false));
        return;
      }

      if (!preset_key || !element) {
        console.log("CLicked3")
        return
      }
      const canvas = await htmlToImage.toPng(element)
      
      const formData = new FormData();
      formData.append("file", canvas);
      formData.append("upload_preset", preset_key);
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
      dispatch(setCardToImage(response?.data?.secure_url))

      const symbol = titleInput.substring(0, 3).toUpperCase()

      const data = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        userAddress: user.verifiedCredentials[0].address,
        point: 0,
        title: titleInput,
        media: imageInput,
        symbol: symbol,
        image: response?.data?.secure_url,
        description: `${user?.firstName, user?.lastName} Nft collection`,
        rule: ruleInput, 
        rank: rankInput,
        action: actionInput,
        amount: priceInput,
        currency: "USDC",
        toll: tollInput,
        theme: themeInput,
        template: currentTemplate,
        tollCurrency: tollCurrency,
        tollAmount: tollAmount,
        visibility: accessibiltyType
      }

      await axios.post("https://ofibox-server-production.up.railway.app/api/cards", data)

      dispatch(setTitleInput(""));
      dispatch(setPriceInput(0));
      dispatch(setTollInput(0));
      dispatch(setImageInput(""));
      dispatch(setCardToImage(""));
      dispatch(setRankInput("0"));
      dispatch(setRuleInput(""));
      dispatch(setThemeInput(""));
      dispatch(setActionInput(""));
      dispatch(setShowLoginScreen(false))

      const cardCreation = false
      const isPaymentComplete = false
      await localStorage.setItem("isCardCreation", cardCreation.toString())
      await localStorage.setItem("isPaymentCompleted", isPaymentComplete.toString())
      router.push("/assets")
    } catch (error) {
      console.log(error)
    } finally {
      setIsCreationFunctionCalled(false)
      dispatch(setLoadingState({
        state: false,
        type: ""
      }))
    }
  }

  useEffect(() => {
    if (isPaymentCompleted && !isCreationFunctionCalled) {
      handleCardCreation()
    }
  }, [isPaymentCompleted, isCreationFunctionCalled])

  const handleAccessibilty = (clicked: string) => {
    dispatch(setTypeOfCard(clicked))
    dispatch(setShowAccessibilty(false))
    handleShowPermission()
  }

  return (
    <div className='h-[94%] md:h-[92%] pt-4'>
      <div className='h-full w-full'>
        {user === undefined && showLoginPermission && <LoginPermission />}
        
        <div className={`"mx-auto flex w-full items-center justify-center pt-5"`}>
          <DisplayCard />
          <TempleteComponent />
        </div>
        {showPermissionToProceed &&
          <PermissionToProceedComponent handleCardCreation={handleCardCreation}/>
        }
        {showAccessibility && 
          <div className='h-full w-full fixed top-0 left-0 flex z-50 items-center justify-center'>
          <div className='w-full fixed h-[100%] top-0 left-0 z-50'>
            <div className="relative w-full h-full">
              <div className='absolute top-0 opacity-80 bg-gray-600 w-full h-full z-40' />
              <div className='flex secondary-text-color justify-center h-full items-center w-full z-50 relative px-4'>
                <div className='w-[150px] shadow-2xl pt-4 bg-zinc-900 rounded-2xl '>
                  <button className='ml-3'>
                  <MdKeyboardBackspace className='text-2xl' onClick={() => dispatch(setShowAccessibilty(false))}/>
                  </button>
                  <p className='text-[14px] px-4 pb-4 text-center'>Card Visibility</p>
                  <div className='flex flex-col pb-8'>
                    <div className='px-4 my-1 cursor-pointer flex items-center font-semibold font-mono' onClick={() => handleAccessibilty("public")}>
                      <div className={`${accessibiltyType === "public"? "w-[11px] h-[11px] bg-yellow-300 text-yellow-300" : "w-[12px] h-[12px] border-[1px] border-yellow-300"}}`}/>
                      <span className='text-[12px] pl-3'>Public</span>
                    </div>
                    <div className='px-4 my-1 cursor-pointer flex items-center font-semibold font-mono' onClick={() => handleAccessibilty("private")}>
                      <div className={`${accessibiltyType === "private"? "w-[11px] h-[11px] bg-yellow-300 text-yellow-300" : "w-[12px] h-[12px] border-[1px] border-yellow-300"}}`}/>
                      <span className='text-[12px] pl-3'>Private</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        }
        <CreateCardButtons uploadUserCard={() => dispatch(setShowAccessibilty(true))} />
      </div>
    </div>
  )
}

export default CardCreation