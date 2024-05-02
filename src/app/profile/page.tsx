"use client"
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import PaymentModel from "../components/payment/PaymentModel";
import AssetsComponent from "../components/card/assest/AssetsComponent";
import { selectShowPaymentModal } from "@/slice/PaymentSlice";
import { MdOutlineAddCircleOutline, MdPersonPin } from "react-icons/md";
import { TbShoppingCartFilled } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter()

    const handleClick = () => {
        const cardCreation = true
        localStorage.setItem("isCardCreation", cardCreation.toString())
        router.push("/")
    }

    return (
        <main className="h-screen w-full">
            <div className="h-full">
                <Header />
                <h2 className="text-center pt-[200px] secondary-text-color">Page currently in progress</h2>
                <div className='flex  w-full fixed bottom-0 inset-x-0 '>
                    <div className='p-2 pb-4 flex items-center justify-around w-full'>

                        <MdPersonPin className='text-2xl md:text-4xl text-yellow-300' />
                        <MdOutlineAddCircleOutline onClick={handleClick} className="text-3xl cursor-pointer text-yellow-300" />
                        <Link href="/assets">
                            <TbShoppingCartFilled className='text-2xl md:text-4xl text-yellow-300' />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
