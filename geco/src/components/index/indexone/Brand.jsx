import React from 'react';
import Slider from 'react-slick';




function Brand() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll:1,
    center:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
   

    ]
  }
  return(
	        <div className="brand-area brand-bg">
        <div className="container">
          <Slider className="row brand-active" {...settings}>
            <div className="col-xl">
              <div className="brand-item">
                <img src="assets/img/brand/brand_logo01.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="brand-item">
                <img src="assets/img/brand/brand_logo02.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="brand-item">
                <img src="assets/img/brand/brand_logo03.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="brand-item">
                <img src="assets/img/brand/brand_logo04.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="brand-item">
                <img src="assets/img/brand/brand_logo05.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="brand-item">
                <img src="assets/img/brand/brand_logo06.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="brand-item">
                <img src="assets/img/brand/brand_logo03.png" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
  )
}

export default Brand;
