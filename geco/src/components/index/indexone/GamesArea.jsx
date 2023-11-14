import React from 'react';
import Slider from 'react-slick';
function PrevArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><i className="fa fa-angle-right"></i></button>
  );
}
function NextArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><i className="fa fa-angle-left"></i></button>
  );
}

function GamesArea() {
	const settings = {
 
 dots: false,
	infinite: true,
	speed: 1000,
	nav:true,
	autoplay: false,
	arrows: true,
	autoplaySpeed: 3000,
  
	prevArrow: <PrevArrow/>,
	nextArrow: <NextArrow/>,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
        Padding:'100px 50px',
				slidesToShow: 2,
				slidesToScroll: 2,
				
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				
				
			}
		},
	]
  }
  return (

	  <div className="area-bg-one">
        {/* latest-games-area */}
        <section className="latest-games-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="section-title mb-50">
                  <span>LATEST RELEASES</span>
                  <h2>Create &amp; <span>Manage</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Slider className="latest-games-active slick" {...settings}>
                  <div className="latest-games-items mb-30">
                    <div className="latest-games-thumb">
                      <a href="/#"><img src="assets/img/product/latest_games_thumb01.jpg" alt="" /></a>
                    </div>
                    <div className="latest-games-content">
                      <div className="lg-tag">
                        <a href="/#">racing</a>
                      </div>
                      <h4><a href="/#">Vertical Games <span>Daily</span></a></h4>
                      <p>entry fee : <span>free</span></p>
                    </div>
                  </div>
                  <div className="latest-games-items mb-30">
                    <div className="latest-games-thumb">
                      <a href="/#"><img src="assets/img/product/latest_games_thumb02.jpg" alt="" /></a>
                    </div>
                    <div className="latest-games-content">
                      <div className="lg-tag">
                        <a href="/#">zombie</a>
                      </div>
                      <h4><a href="/#">Hunter Killer <span>ii</span></a></h4>
                      <p>entry fee : <span>$25,00</span></p>
                    </div>
                  </div>
                  <div className="latest-games-items mb-30">
                    <div className="latest-games-thumb">
                      <a href="/#"><img src="assets/img/product/latest_games_thumb03.jpg" alt="" /></a>
                    </div>
                    <div className="latest-games-content">
                      <div className="lg-tag">
                        <a href="/#">creative</a>
                      </div>
                      <h4><a href="/#">Sky Walker <span>Daily</span></a></h4>
                      <p>entry fee : <span>$25,00</span></p>
                    </div>
                  </div>
                  <div className="latest-games-items mb-30">
                    <div className="latest-games-thumb">
                      <a href="/#"><img src="assets/img/product/latest_games_thumb02.jpg" alt="" /></a>
                    </div>
                    <div className="latest-games-content">
                      <div className="lg-tag">
                        <a href="/#">racing</a>
                      </div>
                      <h4><a href="/#">Vertical games <span>daily</span></a></h4>
                      <p>entry fee : <span>free</span></p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* latest-games-area-end */}
        {/* about-us-area */}
        
        {/* about-us-area-end */}
      </div>
  )
}

export default GamesArea;
