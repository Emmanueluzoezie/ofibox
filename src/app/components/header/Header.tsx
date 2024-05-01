import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import WalletButtonComponent from '../WalletButtonComponent'
import Link from 'next/link'
import { TbShoppingCartFilled } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setShowCardCreation } from '@/slice/AppSlice'

const Header = () => {

  const dispatch = useDispatch()
const pathName = usePathname()
  const router = useRouter()

  const handleRoute = () => {
    if(pathName === "/"){
      dispatch(setShowCardCreation(false))
    } else {
      router.push("/")
    }
  }

  return (
    <header className='h-[6%] md:h-[8%] px-2 md:px-10 flex items-center justify-between'>
        <Image src="/ofibox-logo.png" className="w-[48px] h-[48px] md:w-[60px] md:h-[60px]  rounded-full cursor-pointer" width={100} height={100} alt="" onClick={handleRoute}/>

      <div className='flex items-center space-x-3'>
        {/* <WalletButtonComponent /> */}
        {/* <Link href="/assets">
        <button className={`flex flex-col items-center justify-center text-gray-700`}>
          <TbShoppingCartFilled className='text-2xl md:text-4xl text-yellow-300' />
        </button>
        </Link> */}
        <div className='header-card'>
          <span className='text-[10px]'>Cards</span>
          <h2 className='text-[14px]'>50K</h2>
        </div>
        <div className='header-card'>
          <span className='text-[10px]'>Rev</span>
          <h2 className='text-[14px]'>$520k</h2>
        </div>
        <div className='header-card'>
          <span className='text-[10px]'>Tournaments</span>
          <h2 className='text-[14px]'>36</h2>
        </div>
        <div className='header-card'>
          <span className='text-[10px]'>GPD</span>
          <h2 className='text-[14px]'>25K</h2>
        </div>
      </div>
    </header>
  )
}

export default Header