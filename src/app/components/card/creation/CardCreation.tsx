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
import LoginScreen from '../../login/LoginScreen'
import { selectActionInput, selectCardToImage, selectCurrentTemplate, selectCurrentTemplateId, selectImageInput, selectPriceInput, selectRankInput, selectRuleInput, selectShowPermissionToProceed, selectThemeInput, selectTitleInput, selectTollInput, setActionInput, setCardToImage, setImageInput, setPriceInput, setRankInput, setRuleInput, setShowPermissionToProceed, setThemeInput, setTitleInput, setTollInput } from '@/slice/CardSlice'
import { selectIsPaymentCompleted, setShowPaymentModal } from '@/slice/PaymentSlice'
import * as htmlToImage from 'html-to-image';
import axios from 'axios'
import PermissionToProceedComponent from './PermissionToProceedComponent'
import { selectAmountToBeDebited, setAmountToBeDebited } from '@/slice/userSlice'

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
  const tollAmount = useSelector(selectAmountToBeDebited)
  const creationAmount = useSelector(selectAmountToBeDebited)

  const preset_key = process.env.NEXT_PUBLIC_PRESET_KEY
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME
  const cardCreationAmount = process.env.NEXT_PUBLIC_PAYMENT_AMOUNT
  const element = document.getElementById(currentTemplateId);

  const handleShowPermission = async () => { }

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

      dispatch(setAmountToBeDebited(creationAmount + Number(cardCreationAmount)))
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
        tollAmount: tollAmount
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
        <CreateCardButtons uploadUserCard={handleCardCreation} />
      </div>
    </div>
  )
}

export default CardCreation