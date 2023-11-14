import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from '../upcoming/Breadcrumb';
import SingleArea from './SingleArea';
import ReleaseGame from './ReleaseGame'


function GameSingle() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<SingleArea/>
	<ReleaseGame/>
	</main>
	<Footer/>
	</>
  )
}

export default GameSingle