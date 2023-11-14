import React from 'react'
import Breadcrumb from './Breadcrumb'
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import BlogContent from './BlogContent'

function BlogDetails() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<BlogContent/>

	</main>
	<Footer/>
	</>
  )
}

export default BlogDetails