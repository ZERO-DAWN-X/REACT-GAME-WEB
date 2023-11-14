import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import UpcomingGames from './UpcomingGames';
import LatestMatch from '../aboutuspage/LatestMatch';
import AboutInner from '../aboutuspage/AboutInner';

function Upcoming() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<UpcomingGames/>
	<LatestMatch/>
	<AboutInner/>
	</main>
	<Footer/>
	</>
  )
}

export default Upcoming