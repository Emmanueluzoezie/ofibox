"use client"
import { useEffect, useMemo, useRef, useState } from "react";
import {
  encodeURL,
  findReference,
  FindReferenceError,
  validateTransfer,
} from "@solana/pay";
// import { setCookie } from 'cookies-next';
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
// import useToastHook from "@/hooks/useToastHook";
import BigNumber from 'bignumber.js';
import { useDispatch, useSelector } from "react-redux";
import { selectTitleInput } from "@/slice/CardSlice";
import { createQR } from "@/lib/createQr";
import { setIsPaymentCompleted, setValidatedTransaction } from "@/slice/PaymentSlice";
import { selectAmountToBeDebited } from "@/slice/userSlice";
;

const ofiBoxAddress = process.env.NEXT_PUBLIC_OFIBOX_ADDRESS

export default function QrCodePayment() {
  const [connectionString, setConnectionString] = useState(`https://devnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELUIS_APIKEY}`)
    const qrRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch()
    const titleInput = useSelector(selectTitleInput)

    if (!ofiBoxAddress) {
        throw new Error('Wallet address is not defined');
    }
  const paymentAmount = useSelector(selectAmountToBeDebited)
  const CONNECTION = new Connection(connectionString, 'confirmed');
  
  const recipient = new PublicKey(ofiBoxAddress);
  const amount = new BigNumber(Number(paymentAmount));
  const reference = useMemo(() => Keypair.generate().publicKey, []);
  const label = 'OFIBOX';
  const message = `Payment for creating ${titleInput} card.`;
  const memo = 'OFIBOX card creation';

  useEffect(() => {
    const solanaUrl = encodeURL({ recipient, amount, reference, label, message, memo });
    const qr = createQR(
      solanaUrl, 
      300, 
      "transparent"
    );

    if (qrRef.current) {
      qrRef.current.innerHTML = "";
      qr.append(qrRef.current);
    }
  }, [reference, recipient, amount, message, message, memo]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const signatureInfo = await findReference(CONNECTION, reference, {
          finality: "confirmed",
        });

        const validated = await validateTransfer(CONNECTION, signatureInfo.signature, {
          recipient,
          amount,
          reference
        }, { commitment: "finalized" })

        if (validated) {
          dispatch(setValidatedTransaction(true))
          dispatch(setIsPaymentCompleted(true))
          setConnectionString(`https://devnet.helius-rpc.com/?api-key=ghv6787cghjhkvgh`)
        }

      } catch (e) {
        if (e instanceof FindReferenceError) {
          return;
        }
      }
    }, 5000); // Check for new transactions every 5 seconds
    return () => {
      clearInterval(interval);
    };
  }, [reference,CONNECTION,recipient,amount,reference,dispatch]);

  return <div ref={qrRef} />;
}