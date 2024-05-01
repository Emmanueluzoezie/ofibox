import { selectCurrentAssetScreen, selectShowLoginButton, selectShowLoginScreen, setCurrentAssetScreen, setLoadingState, setShowLoginButton } from '@/slice/AppSlice'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoginPermission from '../../login/LoginPermission'
import UserAssetsComponent from './UserAssetsComponent'
import AllAssetComponent from './AllCardComponent'
import DeckComponent from './DeckComponent'
import axios from 'axios'
import LoginScreen from '../../login/LoginScreen'

const AssetsComponent = () => {
  const [data, setData] = useState([])

  const { user } = useDynamicContext()
  const dispatch = useDispatch()

  const showLoginScreen = useSelector(selectShowLoginScreen)
  const showLoginPermission = useSelector(selectShowLoginButton)
  const currentAssetScreen = useSelector(selectCurrentAssetScreen)

  const handleGetAssets = async () => {
    try {
      if (user === undefined) {
        dispatch(setShowLoginButton(true))
        return
      }
      dispatch(setLoadingState({
        state: true,
        type: "card"
      }))

      dispatch(setCurrentAssetScreen("asset"))

      // get data from server
      const response = await axios.get(`https://ofibox-server-production.up.railway.app/api/cards/findCardByEmail?email=${user.email}`)

      console.log(response.data)
      setData(response.data)// get data from server
      // set data to state


    } catch (error: any) {
      if (error?.response && error.response.status === 404) {
        setData([]);
      } else {
        console.error("Error fetching data:", error);
      }
    } finally {
      dispatch(setLoadingState({
        state: false,
        type: ""
      }))
    }
  }

  const handleGetAllAssets = async () => {
    try {
      dispatch(setLoadingState({
        state: true,
        type: "card"
      }))

      dispatch(setCurrentAssetScreen("all_asset"))

      // get data from server
      const response = await axios.get("https://ofibox-server-production.up.railway.app/api/cards")

      console.log(response.data)
      setData(response.data)
      // set data to state


    } catch (error) {
      console.log("error: ", error)
    } finally {
      dispatch(setLoadingState({
        state: false,
        type: ""
      }))
    }
  }

  const handleGetDeckAssets = async () => {
    try {
      dispatch(setLoadingState({
        state: true,
        type: "deck"
      }))

      dispatch(setCurrentAssetScreen("deck"))

      // get data from server
      // set data to state


    } catch (error) {
      console.log("error: ", error)
    } finally {
      // dispatch(setLoadingState({
      //   state: false,
      //   type: ""
      // }))
    }
  }

  useEffect(() => {
    handleGetAllAssets()
  }, [])

  return (
    <div className='h-[94%] md:h-[92%] border-2 pt-4'>
      {showLoginScreen ?
        <LoginScreen />
        :
        <>
          {showLoginPermission ?
            <LoginPermission />
            :
            <div className="h-full">
              <div className={`flex justify-center h-[6%]`}>
                <button className={`flex items-center justify-center w-[110px] rounded-tl rounded-bl ${currentAssetScreen === "asset" ? "primary-text-color" : "border-[1px] border-zinc-700 text-zinc-50"}`} onClick={handleGetAssets}>your Assets</button>
                <button className={`flex items-center justify-center w-[110px] ${currentAssetScreen === "all_asset" ? "primary-text-color" : "border-[1px] border-zinc-700 text-zinc-50"}`} onClick={handleGetAllAssets}>All Assets</button>
                <button className={`flex items-center justify-center w-[110px] rounded-tr rounded-br ${currentAssetScreen === "deck" ? "primary-text-color " : "border-[1px] border-zinc-700 text-zinc-50"}`} onClick={handleGetDeckAssets}>Deck</button>
              </div>
              <div className='h-[93%] w-full overflow-scroll pb-24'>
                {currentAssetScreen === "asset" ?
                  <UserAssetsComponent cards={data} fetchCards={handleGetAssets} />
                  :
                  (currentAssetScreen === "deck" ?
                    <DeckComponent decks={data} fetchCards={handleGetDeckAssets} />
                    :
                    <AllAssetComponent cards={data} fetchCards={handleGetAllAssets} />
                  )
                }
              </div>
            </div>
          }
        </>
      }
    </div>
  )
}

export default AssetsComponent