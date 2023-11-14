import React from 'react'
import Slider from "react-slick";

const FeatureArea = () => {
     
  const settings= {


    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  }

  return (
    <section className="featured-game-area new-released-game-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="section-title home-four-title black-title text-center mb-60">
                <h2>ALL RELEASED <span>GAMES</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-full">
          <Slider className="row no-gutters new-released-game-active" {...settings}>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb01.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">JUST FOR <span>GAMERS</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">JUST FOR <span>GAMERS</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb02.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">Need FOR <span>Speed</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">Need FOR <span>Speed</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb03.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">egypt hunting <span>GAMERS</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">egypt hunting <span>GAMERS</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb04.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">JUST FOR <span>GAMERS</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">JUST FOR <span>GAMERS</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb02.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">Need FOR <span>Speed</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">Need FOR <span>Speed</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-bell" />
                    <span>Playstation 5 , Xbox</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default FeatureArea