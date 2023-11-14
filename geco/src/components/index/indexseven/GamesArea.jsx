import React from 'react'
import Slider from 'react-slick'


const GamesArea = () => {
 
 const settings ={
    dots: false,
	infinite: true,
	speed: 0,
	autoplay: true,
	autoplaySpeed: 1000,
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
    <section className="makes-gaming-chair">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6 col-md-10">
          <div className="game-shop-title text-left mb-60">
            <h2 className="title">Makes Gaming <span>Chair</span></h2>
            <p>Compete with 100 player on a remote island for winner
              known where certain strategic.</p>
          </div>
          <div className="just-gamers-list">
            <ul>
              <li>
                <div className="just-gamers-list-icon">
                  <img src="assets/img/icon/mgc_icon01.png" alt="" />
                </div>
                <div className="just-gamers-list-content fix">
                  <h5>Leather &amp; Ergonomic</h5>
                  <p>See how well critics rating new video game release players</p>
                </div>
              </li>
              <li>
                <div className="just-gamers-list-icon">
                  <img src="assets/img/icon/mgc_icon02.png" alt="" />
                </div>
                <div className="just-gamers-list-content fix">
                  <h5>200 kg Heavy Load</h5>
                  <p>See how well critics rating new video game release players</p>
                </div>
              </li>
              <li>
                <div className="just-gamers-list-icon">
                  <img src="assets/img/icon/mgc_icon03.png" alt="" />
                </div>
                <div className="just-gamers-list-content fix">
                  <h5>Multi scene use</h5>
                  <p>See how well critics rating new video game release players</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-7 col-lg-6 d-none d-lg-block">
          <Slider className="gaming-chair-active" {...settings}>
            <div className="gaming-chair-wrap">
              <img src="assets/img/images/chair.png" alt="" className="main-chair" />
              <img src="assets/img/images/chair_zoom.png" alt="" className="chair-zoom" />
              <img src="assets/img/images/chair_chart.png" alt="" className="chair-chart" />
            </div>
            <div className="gaming-chair-wrap">
              <img src="assets/img/images/chair02.png" alt="" className="main-chair" />
              <img src="assets/img/images/chair_zoom02.png" alt="" className="chair-zoom" />
              <img src="assets/img/images/chair_chart.png" alt="" className="chair-chart" />
            </div>
            <div className="gaming-chair-wrap">
              <img src="assets/img/images/chair03.png" alt="" className="main-chair" />
              <img src="assets/img/images/chair_zoom03.png" alt="" className="chair-zoom" />
              <img src="assets/img/images/chair_chart.png" alt="" className="chair-chart" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GamesArea