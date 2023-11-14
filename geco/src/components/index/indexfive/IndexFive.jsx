import React from 'react'
import FooterFive from '../../footer/FooterFive'
import HeaderFive from '../../header/HeaderFive'
import Banner from './Banner'
import BlogArea from './BlogArea'
import GameEpisodeArea from './GameEpisodeArea'
import LatestVideoArea from './LatestVideoArea'
import LiveStreamingArea from './LiveStreamingArea'
import TrendingGame from './TrendingGame'

const IndexFive = () => {

  
  return (
  <>
      <HeaderFive/>
    <main>
        <Banner/>
        <TrendingGame/>
        <LiveStreamingArea/>
        <LatestVideoArea/>
        <GameEpisodeArea/>
        <BlogArea/>
    </main>
    <FooterFive/>
  </>
  )
}

export default IndexFive