"use client"
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/Header";
import VideoComponent from "./components/index/VideoComponent";
import { selectLoadingState, selectShowCardCreation, selectShowLoginButton, selectShowLoginScreen, setShowCardCreation } from "@/slice/AppSlice";
import PaymentModel from "./components/payment/PaymentModel";
import CardCreation from "./components/card/creation/CardCreation";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import LoaderComponent from "./components/loader/LoaderComponent";
import { selectShowPermissionToProceed } from "@/slice/CardSlice";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import Link from "next/link";
import { TbShoppingCartFilled } from "react-icons/tb";
import { useEffect } from "react";
import { selectShowPaymentModal } from "@/slice/PaymentSlice";
import LoginScreen from "./components/login/LoginScreen";

export default function Home() {

  const dispatch = useDispatch()

  const { user } = useDynamicContext()

  const showPaymentModal = useSelector(selectShowPaymentModal)
  const showCardCreation = useSelector(selectShowCardCreation)
  const loading = useSelector(selectLoadingState)
  const showPermissionToProceed = useSelector(selectShowPermissionToProceed)
  const showLoginButton = useSelector(selectShowLoginButton)
  const showLoginScreen = useSelector(selectShowLoginScreen)

  const getCardCreationStatus = (): boolean => {
    const storedValue = localStorage.getItem("isCardCreation");
    return Boolean(storedValue);
  };

  useEffect(() => {
    const isCardCreation = getCardCreationStatus();
    if (isCardCreation) {
      dispatch(setShowCardCreation(true))
    }
  }, [])

  return (
    <main className="h-screen w-full">
      {loading.state && <LoaderComponent />}
      {user === undefined && showLoginScreen && <LoginScreen />}
      <div
      className={`z-40 h-full `}
      >
        <Header /> 
        {showCardCreation ?
          <CardCreation />
          :
          <>
            <VideoComponent />
            <div className='flex  w-full fixed bottom-0 inset-x-0 '>
              <div className='p-2 pb-4 flex items-center justify-around w-full'>
                <button>
                  <TbShoppingCartFilled className='text-2xl md:text-4xl text-yellow-300' />
                </button>
                <MdOutlineAddCircleOutline onClick={() => dispatch(setShowCardCreation(true))} className="text-3xl cursor-pointer text-yellow-300" />
                <Link href="/assets">
                  <TbShoppingCartFilled className='text-2xl md:text-4xl text-yellow-300' />
                </Link>
              </div>
            </div>
          </>
        }
      </div>
      {showPaymentModal && <PaymentModel />}
    </main>
  );
}


// ${showLoginButton  || showPermissionToProceed || loading.state ? "blur-sm" : ""}