"use client"
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import PaymentModel from "../components/payment/PaymentModel";
import AssetsComponent from "../components/card/assest/AssetsComponent";
import { selectShowPaymentModal } from "@/slice/PaymentSlice";

export default function Assests() {

  const showPaymentModal = useSelector(selectShowPaymentModal)

  return (
    <main className="h-screen w-full">
      <div className="h-full">
        <Header />
        <AssetsComponent />            
      </div>
      {showPaymentModal && <PaymentModel />}
    </main>
  );
}
