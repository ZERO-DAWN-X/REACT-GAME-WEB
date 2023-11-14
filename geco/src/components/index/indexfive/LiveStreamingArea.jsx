import React,{  useEffect } from 'react'
import $ from "jquery";
import 'magnific-popup';
import { Link } from 'react-router-dom';

const LiveStreamingArea = () => {
  useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])
  
  return (
    <section className="live-streaming-area">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="hf-section-title mb-50">
            <h4 className="title">live streaming</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="live-stream-item mb-30">
            <div className="thumb">
              <img src="assets/img/images/stream_thumb01.jpg" alt="" />
              <Link className="popup-video" to="https://www.youtube.com/watch?v=ssrNcwxALS4" ><img src="assets/img/icon/w_play.png" alt="" /></Link>
            </div>
            <div className="content">
              <div className="live-stream-meta">
                <ul>
                  <li className="cat"><a href="/#">CRICKET</a></li>
                  <li>3 months ago</li>
                </ul>
              </div>
              <h4 className="title"><a href="/#">Ditched The Naked Chicken Chalupa Here’s To Make</a></h4>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="live-stream-item style-two mb-30">
                <div className="thumb">
                  <img src="assets/img/images/stream_thumb02.jpg" alt="" />
                </div>
                <div className="content">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video"><img src="assets/img/icon/w_play.png" alt="" /></a>
                  <div className="live-stream-meta">
                    <ul>
                      <li className="cat"><a href="/#">sports</a></li>
                      <li>3 months ago</li>
                    </ul>
                  </div>
                  <h4 className="title"><a href="/#">House last week that move would Inject</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="live-stream-item style-two mb-30">
                <div className="thumb">
                  <img src="assets/img/images/stream_thumb03.jpg" alt="" />
                </div>
                <div className="content">
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video"><img src="assets/img/icon/w_play.png" alt="" /></a>
                  <div className="live-stream-meta">
                    <ul>
                      <li className="cat"><a href="/#">sports</a></li>
                      <li>3 months ago</li>
                    </ul>
                  </div>
                  <h4 className="title"><a href="/#">Twas the night before in the NFL</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LiveStreamingArea