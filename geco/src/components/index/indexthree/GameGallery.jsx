import React from 'react'
import Slider from 'react-slick'

function PrevArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-caret-left"></i>Previous </button>
  );
}
function NextArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }> Next<i className="fas fa-caret-right"></i></button>
  );
}


function GameGallery() {
   const settings = {
  centerMode: true,
	centerPadding: '350px',
	slidesToShow: 1,
  prevArrow: <PrevArrow/>,
	nextArrow: <NextArrow/>,
	appendArrows: ".slider-nav",
	arrows: false,
	responsive: [
		{
      
			breakpoint: 1800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '220px',
				infinite: true,
				arrows: false,
			}
		},
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '180px',
				infinite: true,
				arrows: false,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '160px',
				arrows: false,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				centerPadding: '60px',
				arrows: false,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '0px',
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '0px',
				arrows: false,
			}
		},
	]
  }
  return (
	  <div className="game-gallery-area position-relative">
            <div className="game-gallery-bg" />
            <div className="container-fluid p-0 fix">
              <Slider className="row game-gallery-active" {...settings}>
                <div className="col-12">
                  <div className="game-gallery-item">
                    <img src="assets/img/images/game_gallery_01.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="game-gallery-item">
                    <img src="assets/img/images/game_gallery_02.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="game-gallery-item">
                    <img src="assets/img/images/game_gallery_03.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="game-gallery-item">
                    <img src="assets/img/images/game_gallery_04.png" alt="" />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="slider-nav" />
          </div>
  )
}

export default GameGallery