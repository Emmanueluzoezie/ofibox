"use client"
import { selectActionInput, selectImageInput, selectPriceInput, selectRankInput, selectRuleInput, selectShowPermissionToProceed, selectThemeInput, selectTitleInput, selectTollCurrency, selectTollInput, setImageInput, setRankInput, setShowImageLoader, setTollCurrency } from '@/slice/CardSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitleFormComponent from './TitleFormComponent'
import RuleComponent from './RuleComponent'
import TollSlider from './TollSlider'
import PriceComponent from './PriceComponent'
import ActionComponent from './ActionComponent'
import { selectShowLoginButton } from '@/slice/AppSlice'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import RankSlider from './RankSlider'
import axios from 'axios'
import { currencies } from '@/lib/data'
import Image from 'next/image'
import { setAmountToBeDebited } from '@/slice/PaymentSlice'

const CreateCardButtons = ({ uploadUserCard }: any) => {
  const dispatch = useDispatch()

  const { user } = useDynamicContext();

  const imageInput = useSelector(selectImageInput);
  const priceInput = useSelector(selectPriceInput);
  const rankInput = useSelector(selectRankInput);
  const ruleInput = useSelector(selectRuleInput);
  // const showPermissionToProceed = useSelector(selectShowPermissionToProceed);
  const themeInput = useSelector(selectThemeInput);
  const actionInput = useSelector(selectActionInput);
  const tollInput = useSelector(selectTollInput);
  const titleInput = useSelector(selectTitleInput);
  const tollCurrency = useSelector(selectTollCurrency)
  const showPermissionToProceed = useSelector(selectShowPermissionToProceed)
  // const loadingScreen = useSelector(selectLoadingScreen)

  const preset_key = process.env.NEXT_PUBLIC_PRESET_KEY
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME
  const cardCreationAmount = process.env.NEXT_PUBLIC_PAYMENT_AMOUNT

  const filledInputsCount =
    (imageInput ? 1 : 0) +
    (priceInput ? 1 : 0) +
    (rankInput ? 1 : 0) +
    (ruleInput ? 1 : 0) +
    // (showPermissionToProceed ? 1 : 0) +
    (themeInput ? 1 : 0) +
    (actionInput ? 1 : 0) +
    (tollInput ? 1 : 0) +
    (titleInput ? 1 : 0);

  // const percentage = Math.min((filledInputsCount / 8) * 100, 100);

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!preset_key) {
        return
      }

      dispatch(setShowImageLoader(true))

      if (event.target.files && event.target.files[0]) {
        const uploadedImage = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
          if (e.target) {
            const imageData = e.target.result as string;
            const formData = new FormData();
            formData.append("file", uploadedImage);
            formData.append("upload_preset", preset_key);

            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
            dispatch(setImageInput(response.data.secure_url));
            dispatch(setShowImageLoader(false))
          } else {
            // console.error("Error: FileReader target is null.");
          }
        };
 
        reader.readAsDataURL(uploadedImage);
      }
    } catch (error) {
      // console.error("Error processing image:", error);
    }
  };
  

  const handleClick = (click: string) => {
    dispatch(setTollCurrency(click))
  }

  useEffect(() => {
    dispatch(setAmountToBeDebited({
      creation: Number(cardCreationAmount),
      template: 0,
      total: 0
    }))
  }, [])

  return (
    <>
      <div className={`fixed bottom-1 pb-2 inset-x-0 bg-zinc-800 space-y-2 mx-auto rounded-xl w-11/12`}>
        <div className=" flex items-end w-11/12 mx-auto">
          <label htmlFor='media' className="flex items-center w-5/12 mr-1 justify-between mx-auto">
            <div className=" flex items-center">
              <div className=" bg-yellow-300 text-zinc-200 w-10 h-9 rounded-l flex justify-center items-center ">
                <svg className='text-zinc-200 ' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M246.309-148.001q-41.308 0-69.808-28.5-28.5-28.5-28.5-69.808v-65.461q0-17.769 12.616-30.384 12.615-12.615 30.384-12.615t30.384 12.615Q234-329.539 234-311.77v65.461q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h467.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-65.461q0-17.769 12.615-30.384 12.615-12.615 30.384-12.615t30.384 12.615q12.616 12.615 12.616 30.384v65.461q0 41.308-28.5 69.808-28.5 28.5-69.808 28.5H246.309Zm189.692-499.462-76.923 76.923q-12.923 12.923-30.192 13.308-17.269.384-30.577-12.923-13.692-13.308-13.499-30.576.192-17.269 13.499-30.577l146.384-146.383q7.615-7.615 15.846-10.923 8.23-3.308 18.461-3.308 10.231 0 18.461 3.308 8.231 3.308 15.846 10.923l146.384 146.383q12.923 12.923 13.307 29.884.385 16.961-13.307 30.269-13.308 13.307-30.384 13.115-17.077-.192-30.385-13.5l-76.923-75.923v282.002q0 17.768-12.615 30.384-12.615 12.615-30.384 12.615t-30.384-12.615q-12.615-12.616-12.615-30.384v-282.002Z" /></svg>
              </div>
              <p className="text-xs uppercase w-max pl-3 pr-4 h-9 flex items-center justify-center bg-zinc-900 rounded-r text-zinc-200 ">upload</p>
            </div>
          </label>
          <input type="file" accept='.jpeg,.jpg,.png' onChange={uploadImage} name="media" id='media' style={{ display: 'none' }} />

          <TitleFormComponent />
        </div>

        <div className=" rank space-y-2">
          <div className=" flex justify-center">
            <div className=" flex justify-between uppercase text-xs font-sans w-11/12 items-center">
              <p className="label-color">rank</p>
              <p className=" text-zinc-50 font-bold font-mono text-[12px]">{rankInput}</p>
            </div>
          </div>

          <RankSlider />

        </div>


        <div className=" flex w-11/12 mx-auto justify-between items-center">
          <ActionComponent />
          {(actionInput === "pay" || actionInput === "collect") &&
            <div className="w-8/12 md:w-6/12">
              <div className='flex items-center justify-between px-2'>
                {currencies.map((currency) => (
                  <div className={`flex flex-col w-[30px] items-center mx-[6px] cursor-pointer py-[2px] px-[4px] rounded ${tollCurrency === currency.symbol ? "border-[1px] border-zinc-50" : "bg-zinc-900"}`} key={currency.symbol} onClick={() => handleClick(currency.symbol)}>
                    <Image src={currency.image} objectFit='contain' className="w-[10px] h-[10px] rounded object-cover" width={100} height={100} alt='' />
                    <span className='text-[7px] font-extralight pt-1 text-zinc-50'>{currency.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
        <TollSlider />

        <RuleComponent />

        <div className=" price space-y-[4px]">
          <div className=" flex justify-center">
            <div className=" flex justify-between uppercase text-xs font-sans w-11/12 items-center">
              <p className="label-color">price</p>
              <p className=" text-zinc-50 font-bold font-mono text-base"> <span className="text-zinc-50 font-normal text-xs italic">USDC</span> ${priceInput} </p>
            </div>
          </div>

          <div className="slider flex justify-center w-full">
            <PriceComponent />
          </div>

        </div>

        <div className=" w-11/12 flex mx-auto mb-5">
          <button className=" active-primary-button uppercase" onClick={uploadUserCard}>create</button>
        </div>


      </div>
    </>
  )
}

export default CreateCardButtons