import React from 'react'
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import Breadcrumb from "./Breadcrumb";
import CommunityArea from "./CommunityArea"

function Community() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<CommunityArea/>
	</main>
	<Footer/>
	</>
  )
}

export default Community