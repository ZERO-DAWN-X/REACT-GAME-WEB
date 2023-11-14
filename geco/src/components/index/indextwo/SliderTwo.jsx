import React from 'react';
import Slider from 'react-slick';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";



function SliderTwo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll:1,
    center:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          sidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  }

  // useEffect(()=>{
	// new WOW.WOW({
  //   boxClass: 'wow',
	// 	animateClass: 'animated',
	// 	offset: 0,
	// 	mobile: false,
	// 	live: true,
  //   loop:Infinity,
  // }).init();

  // },[])

  return (


<section className="slider-area">
            <Slider className="slider-active" {...settings}>
              <div className="single-slider slider-bg slider-style-two">
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content ">
                        <Fade up delay={.4000}>
                        <h6>world gaming</h6>
                        </Fade>
                        
                        <Fade up delay={.5000}> 
                        <h2>Create <span>Manage</span> Matches</h2>
                        </Fade>
                        <Fade up delay={.5000}>
                        <p>Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                        </Fade >
                       
                        <Fade up delay={.8000}>
                        <a href="/#" className="btn btn-style-two">READ MORE</a>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
                <Slide right delay={.4000}>
                <div className="slider-img"><img src="assets/img/slider/slider_img01.png" alt="" /></div>
                </Slide>
               <Slide left delay={.4000}>
               <div className="slider-img slider-img2 wow slideInRightS"><img src="assets/img/slider/slider_img02.png" alt="" /></div>
               </Slide>
                <div className="slider-circle-shape"><img src="assets/img/slider/slider_circle.png" alt="" className="rotateme" /></div>
              </div>
              <div className="single-slider slider-bg slider-style-two" style={{backgroundImage: 'url(assets/img/slider/slider_bg.jpg)'}}>
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content">
                        <Fade up delay={.4000}>
                        <h6>world gaming</h6>
                        </Fade>
                        <Fade up delay={.5000}>
                        <h2 >Cod <span>Modern</span> Warfare</h2>
                        </Fade>
                        <Fade up delay={.5000}>
                        <p>Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                        </Fade>
                        <Fade up delay={.8000}>
                        <a href="/#" className="btn btn-style-two">READ MORE</a>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
                <Slide right delay={.4000}>
                <div className="slider-img"><img src="assets/img/slider/slider_img01.png" alt="" /></div>
                </Slide>
                <Slide left delay={.4000}>
                <div className="slider-img slider-img2"><img src="assets/img/slider/slider_img02.png" alt="" /></div>
                </Slide>
                <div className="slider-circle-shape"><img src="assets/img/slider/slider_circle.png" alt="" className="rotateme" /></div>
              </div>
            </Slider>
          </section>
  )
}

export default SliderTwo