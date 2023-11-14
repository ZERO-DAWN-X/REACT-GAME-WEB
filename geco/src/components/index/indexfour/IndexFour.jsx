import React from 'react'
import Footer from '../../footer/Footer'
import HeaderFour from '../../header/HeaderFour'
import BlogArea from './BlogArea'
import BrandArea from './BrandArea'
import FeatureArea from './FeatureArea'
import HomeFour from './HomeFour'
import ShopArea from './ShopArea'
import SliderArea from './SliderArea'

const IndexFour = () => {
  return (
    <>  
    <HeaderFour/>
   
    <main>
      <SliderArea/>
      <BrandArea/>
      <HomeFour/>
      <FeatureArea/>
      <ShopArea/>
      <BlogArea/>
    </main>
    <Footer/>
    </>
  )
}

export default IndexFour