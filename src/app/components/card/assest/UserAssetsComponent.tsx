import { selectLoadingState } from '@/slice/AppSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import CardLoaders from '../../loader/CardLoaders';
import DefaultAssetCard from '../templete/default/DefaultAssetCard';
import SecondAssetCard from '../templete/second/SecondAssetCard';
import { useRouter } from 'next/navigation';

type CardProps = {
    cards: Card[]
    fetchCards: () => void
};

const UserAssetsComponent: React.FC<CardProps> = ({ cards, fetchCards }) => {
    const router = useRouter()

    const loading = useSelector(selectLoadingState)

    const handleClick = () => {
        const cardCreation = true
        localStorage.setItem("isCardCreation", cardCreation.toString())
        router.push("/")
    }

    return (
        <div className='flex justify-center pt-2 h-full'>
            {loading.state && loading.type === "card" ?
                <CardLoaders />
                :
                <>
                    {cards.length === 0 ?
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h2 className='py-2 text-zinc-50'>No card found</h2>
                                <button className='active-primary-button' onClick={handleClick}>Create</button>
                            </div>
                        </div>
                        :
                        <div>
                            {cards.map((card) => (
                                <div key={card.id}>
                                    {card.template === "default" ?
                                        <DefaultAssetCard card={card} />
                                        :
                                        <SecondAssetCard card={card} />
                                    }
                                </div>
                            ))}
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default UserAssetsComponent