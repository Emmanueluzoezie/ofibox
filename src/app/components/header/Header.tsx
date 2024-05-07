import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import WalletButtonComponent from '../WalletButtonComponent'
import Link from 'next/link'
import { TbShoppingCartFilled } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { selectShowCardCreation, setShowCardCreation, setShowLoginButton, setShowLoginScreen, setShowWhitePaper } from '@/slice/AppSlice'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'

const Header = () => {

  const dispatch = useDispatch()
  const pathName = usePathname()
  const router = useRouter()

  const { user } = useDynamicContext()
  const isCardCreation = useSelector(selectShowCardCreation)

  const handleRoute = () => {
    if (pathName === "/") {
      dispatch(setShowCardCreation(false))
    } else {
      router.push("/")
    }
  }

  const handleShowWhitePaper = () => {
    if (isCardCreation) {
      const cardCreation = false
      localStorage.setItem("isCardCreation", cardCreation.toString())
      dispatch(setShowCardCreation(false))
    }
    dispatch(setShowWhitePaper(true))
  }

  const handleShowLogin = () => {
    dispatch(setShowLoginScreen(true))
    dispatch(setShowLoginButton(false))
  }

  return (
    <header className='h-[6%] md:h-[8%] px-2 md:px-10 flex items-center justify-between'>
      <Image src="/ofibox-logo.png" className="w-[48px] h-[48px] md:w-[60px] md:h-[60px]  rounded-full cursor-pointer" width={100} height={100} alt="" onClick={handleRoute} />

      {/* <div className='flex items-center space-x-3'>
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
      </div> */}

      <button className='active-primary-button py-1' onClick={handleShowWhitePaper}>View WhitePaper</button>

      {user === undefined ?
        <button className='active-primary-button' onClick={handleShowLogin}>Signin</button>
        :
        <WalletButtonComponent />
      }
    </header>
  )
}

export default Header