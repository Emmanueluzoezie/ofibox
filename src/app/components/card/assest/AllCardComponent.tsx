import { selectLoadingState } from '@/slice/AppSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import CardLoader from '../../loader/CardLoader';
import CardLoaders from '../../loader/CardLoaders';
import DefaultAssetCard from '../templete/default/DefaultAssetCard';
import SecondAssetCard from '../templete/second/SecondAssetCard';

type CardProps = {
  cards: Card[]
  fetchCards: () => void
};

const AllCardsComponent: React.FC<CardProps> = ({ cards, fetchCards }) => {

  const loading = useSelector(selectLoadingState)

  return (
    <div className='flex justify-center pt-2 h-full'>
      {loading.state && loading.type === "card" ?
        <CardLoaders /> 
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
    </div>
  )
}

export default AllCardsComponent