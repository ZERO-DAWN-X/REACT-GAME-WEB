import React from 'react'
import FooterThree from '../../footer/FooterThree';
import HeaderThree from '../../header/HeaderThree';
import SliderThree from './SliderThree'
import AboutArea from './AboutArea'
import GameGallery from './GameGallery'
import MatchArea from './MatchArea'
import Donation from './Donation'
import TeamArea from './TeamArea'
import ContactArea from './ContactArea'
import Brand from './Brand'
function IndexThree() {
  return (
	  <>
	  	{/* header-area */}
      		<HeaderThree/>
        {/* header-area-end */}
        {/* main-area */}
        <main>
          {/* slider-area */}
          	<SliderThree/>
          {/* slider-area-end */}
          {/* third-about-area */}
          	<AboutArea/>
          {/* third-about-area-end */}
          {/* game-gallery-area */}
          	<GameGallery/>
          {/* game-gallery-area-end */}
          {/* my-match-area */}
         	<MatchArea/>
          {/* my-match-area-end */}
          {/* donation-area */}
			<Donation/>
          {/* donation-area-end */}
          {/* team-area */}
         	<TeamArea/>
          {/* team-area-end */}
          {/* contact-area */}
        	<ContactArea/>
          {/* contact-area-end */}
          {/* brand-area */}
         	<Brand/>
          {/* brand-area-end */}
        </main>
       	  {/* main-area-end */}
			<FooterThree/>
		</>
		
  )
}

export default IndexThree