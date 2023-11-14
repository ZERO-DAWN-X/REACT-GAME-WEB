import React,{ useEffect } from 'react';
import 'magnific-popup';
import $ from 'jquery';
import {Link} from 'react-router-dom';

function AboutUsArea() {
	useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])

  return (
	  <section className="about-us-area pt-90 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="about-img">
                  <img src="assets/img/images/about_us_img.jpg" alt="" />
                  <Link to="/https://www.youtube.com/watch?v=_LTiEXMc5J0" className="popup-video"><img src="assets/img/icon/play_btn.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title title-style-two mb-45">
                  <span>about story</span>
                  <h2>Noob Dia <span>Paradiso</span> Tournament</h2>
                </div>
                <div className="about-content">
                  <p>Find technology or people for digital projects in public sector and Find an individual specialist develo researcher.</p>
                  <p>Consectur adipiscing elit, sed do eiusmod tempor incididunt labore dolore mana aliqua. Unimd minim venam quis nostrud
                    exercitation ullamco laboris nisi ut aliquip commodo cpsam.</p>
                  <div className="about-btn">
                    <a href="/#" className="btn">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutUsArea;
