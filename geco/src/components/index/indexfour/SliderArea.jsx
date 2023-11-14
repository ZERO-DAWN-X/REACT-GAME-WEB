import React from 'react'
import Slider from 'react-slick';
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"

const SliderArea = () => {

    const settings={
        dots: true,
		infinite: true,
		speed: 50,
		autoplay: false,
		arrows: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
                
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				}
			},
		]
    }
  return (
    <section className="slider-area home-four-slider">
    <Slider className="slider-active" {...settings}>
      <div className="single-slider slider-bg slider-style-two">
        <div className="container custom-container-two">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="slider-content">
                  <Fade up delay={.4000}>
                  <h6>world gaming</h6>
                  </Fade>
                  <Fade up delay={.4000}>
                  <h2>Create <span>Manage</span> Matches</h2>
                  </Fade>
                  <Fade up delay={.6000}>
                  <p>Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                  </Fade>
                  <Fade up delay={.8000}>
                  <a href="/#" className="btn btn-style-two">READ MORE</a>
                  </Fade>
               
               
              </div>
            </div>
          </div>
          <div className="slider-img">
          <Slide right delay={.8000}>
          <img src="assets/img/slider/four_slider_img01.png" alt="" />
          </Slide>
          </div>
         
        </div>
      </div>
      <div className="single-slider slider-bg slider-style-two">
        <div className="container custom-container-two">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="slider-content">
                  <Fade up delay={.4000}>
                  <h6 data-animation="fadeInUp" data-delay=".4s">world gaming</h6>
                  </Fade>
                <Fade up delay={.4000}>
                <h2>Create <span>Manage</span> Matches</h2>
                </Fade>
                <Fade up delay={.6000}>
                <p>Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                </Fade>
                <Fade up delay={.8000}>
                <a href="/#" className="btn btn-style-two" >READ MORE</a>
                </Fade>
               
              </div>
            </div>
          </div>
          <div className="slider-img">
          <Slide right delay={.8000}>
          <img src="assets/img/slider/four_slider_img02.png" alt="" />
          </Slide>
          </div>
         
        </div>
      </div>
    </Slider>
  </section>
  )
}

export default SliderArea