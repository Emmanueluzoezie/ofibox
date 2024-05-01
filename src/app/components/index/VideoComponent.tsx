import React, { useEffect, useState } from 'react'
import VideoItem from './VideoItem'
import axios from "axios"
import { selectLoadingState } from '@/slice/AppSlice'
import { useSelector } from 'react-redux'

const VideoComponent = () => {
    const [tournamentUser, setTournamentUser] = useState()

    const loading = useSelector(selectLoadingState)

    const getTournament = async () => {
        try {
            // const response = await axios.get("/api/get_tournament", {
            //     params: {
            //         tournamentId: "e819e50d-c0d9-4660-8390-f71e71aba67a"
            //     }
            // })

            // setTournamentUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTournament()
    }, [])




    return (
        <div className="w-full z-40">
            {!loading.state &&
                <VideoItem tournament={tournamentUser} />
            }
        </div>
    )
}

export default VideoComponent