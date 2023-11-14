import React from 'react'
import FooterSix from '../../footer/FooterSix'
import HeaderSix from '../../header/HeaderSix'
import CollectionArea from './CollectionArea'
import SliderArea from './SliderArea'
import GameShop from './GameShop'
import GamesArea from './GamesArea'
import ChairProduct from './ChairProduct'
import ChairDiscount from './ChairDiscount'
import BrandArea from './BrandArea'



const IndexSeven = () => {
  return (
   <>
   <HeaderSix/>
    <main>
        <SliderArea/>
        <CollectionArea/>
        <GameShop/>
        <GamesArea/>
        <ChairProduct/>
        <ChairDiscount/>
        <BrandArea/>
    </main>
   <FooterSix/>
   </>
  )
}

export default IndexSeven