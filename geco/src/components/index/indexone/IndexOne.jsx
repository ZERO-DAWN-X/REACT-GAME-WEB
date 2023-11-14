import React from 'react';
import OneSlider from './OneSlider';
import Brand from './Brand';
import GamesArea from './GamesArea';
import GamesManage from './GamesManage';
import FeaturesArea from './FeaturesArea';
import ShopArea from './ShopArea';
import HeaderOne from '../../header/HeaderOne';
import Footer from '../../footer/Footer';
import AboutUsArea from './AboutUsArea';


function IndexOne() {
  return (
    <>
        <HeaderOne/>
        <main>
          <OneSlider/>
          <Brand/>
          <GamesArea/>
          <AboutUsArea/>
          <GamesManage/>
          <FeaturesArea/>
          <ShopArea/>
        </main>
        <Footer/>
    </>
  )
}

export default IndexOne;
