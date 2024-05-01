import { setShowLoginButton, setShowLoginScreen } from '@/slice/AppSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const LoginPermission = () => {

  const dispatch = useDispatch()

  const handleShowLogin = () => {
    dispatch(setShowLoginScreen(true))
    dispatch(setShowLoginButton(false))
  }

  return (
    <div className='h-full w-full fixed top-0 left-0 flex z-50 items-center justify-center'>
      <div className='w-full fixed h-[100%] top-0 left-0 z-50'>
        <div className="relative w-full h-full">
          <div className='absolute top-0 opacity-80 bg-gray-600 w-full h-full z-40' />
          <div className='flex justify-center h-full items-center w-full z-50 relative'>
            <div className='w-[350px] shadow-2xl pt-4 bg-zinc-900 rounded-2xl'>
              <p className='text-[16px] px-4 pb-4 text-center text-zinc-200'>You are not login</p>
              <div className='flex justify-center pb-8'>
                <button className='bg-yellow-300 rounded px-4 py-1 font-semibold font-mono' onClick={handleShowLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPermission