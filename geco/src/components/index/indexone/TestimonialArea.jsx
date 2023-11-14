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


function TestimonialArea() {
		const settings = {

  dots: false,
	infinite: true,
	margin:0,
	speed: 1000,
	nav:true,
	autoplay: false,
	arrows: true,
	autoplaySpeed: 3000,
	prevArrow: <PrevArrow/>,
	nextArrow: <NextArrow/>,
	slidesToShow: 1,
	slidesToScroll: 1,
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
				slidesToScroll: 1,
				speed: 1000,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
	]
  }
  return (
	<div className="col-xl-6 col-lg-8">
                <div className="testimonial-area position-relative mb-120">
                  <div className="tournament-top-wrap">
                    <div className="section-title tournament-title">
                      <h2>Customers <span>Feedback</span></h2>
                    </div>
                  </div>
                  <Slider className="testimonial-active slick" {...settings}>
                   
					          <div className="testimonial-item">
                      <div className="testimonial-content mb-50">
                        <h5>Gaming Server Activation</h5>
                        <div className="testimonial-rating mb-30">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p>“ Game server also sometimes referred to as host server which is the authoritative source of events in multiplayer video
                          game The server clients mntain their own accurate sometimes referred connected clients to maintain their own accurate
                          version version ”</p>
                      </div>
                      <div className="testimonial-avatar">
                        <div className="testi-avtar-img">
                          <img src="assets/img/images/testi_avatar.png" alt="" />
                        </div>
                        <div className="testi-avatar-info">
                          <h6>Mark Alexander</h6>
                          <span>Founder Pro</span>
                        </div>
                      </div>
                    </div>
				
                    <div className="testimonial-item">
                      <div className="testimonial-content mb-50">
                        <h5>Gaming Server Activation</h5>
                        <div className="testimonial-rating mb-30">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p>“ Game server also sometimes referred to as host server which is the authoritative source of events in multiplayer video
                          game The server clients mntain their own accurate sometimes referred connected clients to maintain their own accurate
                          version version ”</p>
                      </div>
                      <div className="testimonial-avatar">
                        <div className="testi-avtar-img">
                          <img src="assets/img/images/testi_avatar.png" alt="" />
                        </div>
                        <div className="testi-avatar-info">
                          <h6>Mark Alexander</h6>
                          <span>Founder Pro</span>
                        </div>
                      </div>
                    </div>
                  </Slider>
                  <div className="testi-quote"><img src="assets/img/icon/testi_quote.png" alt="" /></div>
                </div>
              </div>
  )
}

export default TestimonialArea