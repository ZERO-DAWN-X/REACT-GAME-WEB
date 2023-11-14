import React,{ useEffect } from 'react'
import $ from "jquery";
import 'magnific-popup';

const TrendingGame = () => {

  useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])
  
  return (
    <section className="trending-gamepay-area">
        <div className="container">
          <div className="row align-items-center mb-30">
            <div className="col-sm-6">
              <div className="hf-section-title">
                <h4 className="title">Trending</h4>
              </div>
            </div>
            <div className="col-sm-6 d-none d-sm-block">
              <div className="section-btn">
                <a href="/#" className="border-btn"><i className="fas fa-play" /> Watch Now</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="trending-gameplay-item mb-50">
                <div className="gameplay-thumb">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <img src="assets/img/icon/v_play.png" alt="" className="play" />
                    <img src="assets/img/images/trending_thumb01.jpg" alt="" />
                  </a>
                  <div className="treand-gameplay-overlay">
                    <ul>
                      <li className="duration">01 :45</li>
                      <li className="quality">hd</li>
                    </ul>
                  </div>
                </div>
                <div className="d-block d-sm-flex align-items-start">
                  <div className="gameplay-content">
                    <h5 className="title"><a href="/#">Mark Sniper sells House</a></h5>
                    <div className="gameplay-meta">
                      <ul>
                        <li>35k views</li>
                        <li>January 25, 2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gameplay-status">
                    <span>lives</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="trending-gameplay-item mb-50">
                <div className="gameplay-thumb">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <img src="assets/img/icon/v_play.png" alt="" className="play" />
                    <img src="assets/img/images/trending_thumb02.jpg" alt="" />
                  </a>
                  <div className="treand-gameplay-overlay">
                    <ul>
                      <li className="duration">01 :45</li>
                      <li className="quality">hd</li>
                    </ul>
                  </div>
                </div>
                <div className="d-block d-sm-flex align-items-start">
                  <div className="gameplay-content">
                    <h5 className="title"><a href="/#">Mark Sniper sells House</a></h5>
                    <div className="gameplay-meta">
                      <ul>
                        <li>35k views</li>
                        <li>January 25, 2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gameplay-status">
                    <span>lives</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="trending-gameplay-item mb-50">
                <div className="gameplay-thumb">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <img src="assets/img/icon/v_play.png" alt="" className="play" />
                    <img src="assets/img/images/trending_thumb03.jpg" alt="" />
                  </a>
                  <div className="treand-gameplay-overlay">
                    <ul>
                      <li className="duration">01 :45</li>
                      <li className="quality">hd</li>
                    </ul>
                  </div>
                </div>
                <div className="d-block d-sm-flex align-items-start">
                  <div className="gameplay-content">
                    <h5 className="title"><a href="/#">Mark Sniper sells House</a></h5>
                    <div className="gameplay-meta">
                      <ul>
                        <li>35k views</li>
                        <li>January 25, 2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gameplay-status">
                    <span>lives</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="trending-gameplay-item mb-50">
                <div className="gameplay-thumb">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <img src="assets/img/icon/v_play.png" alt="" className="play" />
                    <img src="assets/img/images/trending_thumb04.jpg" alt="" />
                  </a>
                  <div className="treand-gameplay-overlay">
                    <ul>
                      <li className="duration">01 :45</li>
                      <li className="quality">hd</li>
                    </ul>
                  </div>
                </div>
                <div className="d-block d-sm-flex align-items-start">
                  <div className="gameplay-content">
                    <h5 className="title"><a href="/#">Mark Sniper sells House</a></h5>
                    <div className="gameplay-meta">
                      <ul>
                        <li>35k views</li>
                        <li>January 25, 2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gameplay-status">
                    <span>lives</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="trending-gameplay-item mb-50">
                <div className="gameplay-thumb">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <img src="assets/img/icon/v_play.png" alt="" className="play" />
                    <img src="assets/img/images/trending_thumb05.jpg" alt="" />
                  </a>
                  <div className="treand-gameplay-overlay">
                    <ul>
                      <li className="duration">01 :45</li>
                      <li className="quality">hd</li>
                    </ul>
                  </div>
                </div>
                <div className="d-block d-sm-flex align-items-start">
                  <div className="gameplay-content">
                    <h5 className="title"><a href="/#">Mark Sniper sells House</a></h5>
                    <div className="gameplay-meta">
                      <ul>
                        <li>35k views</li>
                        <li>January 25, 2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gameplay-status">
                    <span>lives</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="trending-gameplay-item mb-50">
                <div className="gameplay-thumb">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <img src="assets/img/icon/v_play.png" alt="" className="play" />
                    <img src="assets/img/images/trending_thumb06.jpg" alt="" />
                  </a>
                  <div className="treand-gameplay-overlay">
                    <ul>
                      <li className="duration">01 :45</li>
                      <li className="quality">hd</li>
                    </ul>
                  </div>
                </div>
                <div className="d-block d-sm-flex align-items-start">
                  <div className="gameplay-content">
                    <h5 className="title"><a href="/#">Mark Sniper sells House</a></h5>
                    <div className="gameplay-meta">
                      <ul>
                        <li>35k views</li>
                        <li>January 25, 2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gameplay-status">
                    <span>lives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TrendingGame