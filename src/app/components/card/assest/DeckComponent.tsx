import { selectLoadingState } from '@/slice/AppSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import DeckLoader from '../../loader/DeckLoader';

type DeckProps = {
    decks: any
    fetchCards: () => void
};

const DeckComponent: React.FC<DeckProps> = ({ decks, fetchCards }) => {

    const loading = useSelector(selectLoadingState)

    return (
        <div className='pt-2 h-full'>
            {loading.state && loading.type === "deck" ?
             <div className='flex items-center justify-center pt-2 h-full'>
                 <DeckLoader />
             </div>
                :
                <div>ALl Assets</div>
            }
        </div>
    )
}

export default DeckComponent