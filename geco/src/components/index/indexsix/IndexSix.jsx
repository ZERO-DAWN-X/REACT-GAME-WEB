import React from 'react'
import FooterSix from '../../footer/FooterSix'
import HeaderSix from '../../header/HeaderSix'
import BannerArea from './BannerArea'
import GamesNewsArea from './GamesNewsArea'
import LiveStreamingArea from './LiveStreamingArea'
import TrendingnewsArea from './TrendingnewsArea'
import WorldNewsArea from './WorldNewsArea'


const IndexSix = () => {
  return (
   <>
     <HeaderSix/>
     <main>
         <BannerArea/>
         <TrendingnewsArea/>
         <WorldNewsArea/>
         <LiveStreamingArea/>
         <GamesNewsArea/>
     </main>
     <FooterSix/>
   </>
  )
}

export default IndexSix