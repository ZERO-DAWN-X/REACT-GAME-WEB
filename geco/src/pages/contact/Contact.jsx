import React from 'react'
import Breadcrumb from './Breadcrumb';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import ContactArea from './ContactArea';
import Brand from '../../components/index/indexone/Brand'


function Contact() {
  return (
	<>
	<HeaderTwo/>
	<main>

	<Breadcrumb/>
	<ContactArea/>
	<Brand/>
	</main>
	<Footer/>
	</>
  )
}

export default Contact