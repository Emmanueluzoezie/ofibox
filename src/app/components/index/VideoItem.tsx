"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaClock } from 'react-icons/fa'
import { HiBanknotes } from 'react-icons/hi2'
import { useRouter } from 'next/navigation'

type Props = {
    tournament: any
}

const VideoItem = ({ tournament }: Props) => {
    const [timeRemaining, setTimeRemaining] = useState("")

    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        const deadlineDate = new Date(tournament?.expires);
        const createdDate = new Date(tournament?.createdAt);

        const updateCountdown = () => {
            const timeDifference = deadlineDate.getTime() - Date.now();

            if (timeDifference <= 0) {
                setTimeRemaining("Bet is over");
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Format the time remaining
            const formattedTimeRemaining = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            setTimeRemaining(formattedTimeRemaining);
        };

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval);
    }, [tournament]);

    const handlePageRoute = () => {
        // dispatch(setPageLoader(true))
        router.push("/game/e819e50d-c0d9-4660-8390-f71e71aba67a")
    }

    return (
        <div className='relative pt-[200px] secondary-text-color mx-auto md:w-[600px] lg:w-[800px] '>
            <video src='/demo.MOV' id="local-video" autoPlay playsInline muted className="w-full rounded md:w-[600px] lg:w-[800px] object-cover" loop></video>
            <div className='absolute  bottom-0 z-40 inset-x-0 flex justify-center md:w-[600px] lg:w-[800px] '>
                <div className='w-[100%] bg-yellow-300 p-[6px] rounded rounded-tl-xl rounded-tr-xl flex md:px-6'>
                    <div className='flex-1 flex justify-around'>
                        <div className='flex items-center font-mono text-xs md:text-sm space-x-[4px] font-semibold capitalize'>
                            <FaClock />
                            <span>{timeRemaining}</span>
                        </div>
                        <div className='flex items-center font-mono text-xs space-x-[4px] font-semibold capitalize'>
                            <HiBanknotes />
                            <span>{tournament?.tournamentPoint}{" "}PTS</span>
                        </div>
                    </div>
                    <button className='active-secondary-button px-4 py-1 sm:w-[35%]'
                        type="button"
                        onClick={handlePageRoute}
                    >Join </button>
                </div>
            </div>
        </div>
    )
}

export default VideoItem