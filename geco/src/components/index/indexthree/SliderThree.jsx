import React from 'react'
import Bounce from 'react-reveal/Bounce';

function SliderThree() {
  return (
	 <section className="third-banner-bg">
            <div className="container custom-container">
              <div className="row">
                <div className="col-12">
                  <div className="third-banner-img wow bounceInDown" data-wow-delay=".2s">
                   <Bounce top>
                   <img src="assets/img/slider/third_banner_img.png" alt="" />
                   </Bounce>
                  </div>
                  <div className="third-banner-content text-center wow bounceInUp" data-wow-delay=".2s">
                    <Bounce bottom>
                    <h2>iám stream<span>er</span></h2>
                    <h6>online streaming media</h6>
                    <a href="/#" className="btn rotated-btn">buy Now</a>
                    </Bounce>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default SliderThree