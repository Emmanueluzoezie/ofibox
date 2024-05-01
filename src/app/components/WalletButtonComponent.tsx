"use client"
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import Image from 'next/image';
import { FaRegCopy } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdPerson, MdPerson2 } from 'react-icons/md';

const WalletButtonComponent = () => {
    const { primaryWallet, setShowDynamicUserProfile } = useDynamicContext()
    const copyTextRef = useRef(null);

    const truncateString = (inputString: string) => {
        if (inputString.length <= 8) {
            return inputString; 
        } else {
            const truncatedString = inputString.slice(0, 4) + '...' + inputString.slice(-4);
            return truncatedString;
        }
    }

    const copyToClipboard = () => {
        let address:string = primaryWallet?.address ?? ''

        if (address) {            
            navigator.clipboard.writeText(address);
            toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  <div className="flex-1 items-center w-0 p-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 pt-0.5">
                        <Image
                          className="h-4 w-4"
                          src="/public/solana-sol-logo.svg"                          
                          alt="Solana logo"
                          width={100} height={100}
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            Wallet address copied!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            ))
        }        
    };

    const bringUpDynamicUserProfile = () => {
        setShowDynamicUserProfile(true)
    }

  return (
    <>
    {primaryWallet?.address &&     
        <div className="flex items-center bg-yellow-300 py-[2px] px-3  gap-2 rounded-3xl">
            <div onClick={copyToClipboard} className=" cursor-pointer flex items-center rounded-md hover:bg-gray-700  pr-2 font-mono">                        
                <div className="h-6 w-6 rounded flex items-center justify-center ">
                    <FaRegCopy  className='text-[14px]'/>
                </div>
                <p className="text-[14px]" ref={copyTextRef} id="primary-wallet-address">
                    {truncateString(primaryWallet?.address)}
                </p>
                <button>
                <MdPerson2 className='px-2 text-[14px] text-black' onClick={bringUpDynamicUserProfile}/>
                </button>
            </div>
            {/* <div onClick={bringUpDynamicUserProfile} className="border cursor-pointer border-gray-700 h-4 w-4 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white hover:border-white">
                <FaRegUser className='text-[10px]'/>
            </div> */}

        </div>
    }
    </>
  )
}

export default WalletButtonComponent