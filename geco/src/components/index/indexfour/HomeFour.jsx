import React,{ useEffect } from 'react'
import $ from "jquery"
import 'magnific-popup';
import GamesArea from '../indexone/GamesArea';

const HomeFour = () => {


    useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])



  return (
    <div className="home-four-area-bg">
    <div className="bg" />
    {/* latest-games-area */}
        <GamesArea/>
    {/* latest-games-area-end */}
    {/* live-match-area */}
    <section className="live-match-area pt-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-title home-four-title text-center mb-60">
              <h2>watch live <span>match</span></h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="live-match-wrap">
              <img src="assets/img/images/live_match_img.jpg" alt="" />
              <a href="https://www.youtube.com/watch?v=04KPiGmC7Lc" className="popup-video"><img src="assets/img/icon/video_play_icon.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* live-match-area-end */}
    {/* live-match-team-area */}
    <section className="live-match-area fix pt-120 pb-110">
      <div className="container custom-container-two">
        <div className="row">
          <div className="col-lg-4">
            <div className="live-match-team">
              <img src="assets/img/team/live_match_logo01.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="live-match-time text-center">
              <span>upcoming live matches</span>
              <h2 className="time">08:30</h2>
              <h2 className="live-overlay-text">live</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="live-match-team right">
              <img src="assets/img/team/live_match_logo02.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* live-match-team-area-end */}
  </div>
  )
}

export default HomeFour