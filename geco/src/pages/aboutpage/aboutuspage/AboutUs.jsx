import React from 'react';
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import AboutInner from './AboutInner'
import LatestMatch from './LatestMatch'
import TeamMem from './TeamMem'

function AboutUs() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<AboutInner/>
	<LatestMatch/>
	<TeamMem/>
	
	</main>
	<Footer/>
	</>
  )
}

export default AboutUs
