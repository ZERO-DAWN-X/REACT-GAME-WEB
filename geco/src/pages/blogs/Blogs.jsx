import React from 'react'
import Breadcrumb from './Breadcrumb'
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import Blogarea from './Blogarea'


function Blogs() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<Blogarea/>
	</main>
	<Footer/>
	
	</>
  )
}

export default Blogs