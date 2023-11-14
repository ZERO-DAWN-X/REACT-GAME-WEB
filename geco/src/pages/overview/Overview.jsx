import React from 'react';
import Breadcrumb from './Breadcrumb';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import GameSingleArea from './GameSingleArea';

function Overview() {
  return (
	<>
		<HeaderTwo/>
		<main>
			<Breadcrumb/>
			<GameSingleArea/>

		</main>
		<Footer/>
	</>
  )
}

export default Overview