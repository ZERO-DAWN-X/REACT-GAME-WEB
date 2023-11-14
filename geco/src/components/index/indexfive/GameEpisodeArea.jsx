import React from 'react';
import Slider from 'react-slick';


const GameEpisodeArea = () => {



    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 2,
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
            slidesToShow: 1,
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
        dots: false,
          }
        },
      ]
      }


     
  return (
      
    <section className="game-episodes-area">
    <div className="container">
      <div className="episodes-wrapper">
        <div className="row">
          <div className="col-sm-6">
            <div className="hf-section-title mb-30">
              <h4 className="title">Episodes video</h4>
            </div>
          </div>
        </div>
        <Slider className="row game-episodes-active"{...settings}>
        <div className="col-lg">
            <div className="game-episodes-item">
              <div className="thumb">
                <img src="assets/img/images/episode_thumb01.jpg" alt="" />
                <div className="episodes-tags">
                  <a href="/#">sports</a>
                </div>
              </div>
              <div className="content">
                <span className="date">December 19, 2021</span>
                <h5 className="title"><a href="/#">Hacking Satellites with $300 Worth of TV</a></h5>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="game-episodes-item">
              <div className="thumb">
                <img src="assets/img/images/episode_thumb02.jpg" alt="" />
                <div className="episodes-tags">
                  <a href="/#">sports</a>
                </div>
              </div>
              <div className="content">
                <span className="date">December 19, 2021</span>
                <h5 className="title"><a href="/#">Hacking Satellites with $300 Worth of TV</a></h5>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="game-episodes-item">
              <div className="thumb">
                <img src="assets/img/images/episode_thumb03.jpg" alt="" />
                <div className="episodes-tags">
                  <a href="/#">sports</a>
                </div>
              </div>
              <div className="content">
                <span className="date">December 19, 2022</span>
                <h5 className="title"><a href="/#">Hacking Satellites with $300 Worth of TV</a></h5>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="game-episodes-item">
              <div className="thumb">
                <img src="assets/img/images/episode_thumb04.jpg" alt="" />
                <div className="episodes-tags">
                  <a href="/#">sports</a>
                </div>
              </div>
              <div className="content">
                <span className="date">December 19, 2022</span>
                <h5 className="title"><a href="/#">Hacking Satellites with $300 Worth of TV</a></h5>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="game-episodes-item">
              <div className="thumb">
                <img src="assets/img/images/episode_thumb02.jpg" alt="" />
                <div className="episodes-tags">
                  <a href="/#">sports</a>
                </div>
              </div>
              <div className="content">
                <span className="date">December 19, 2022</span>
                <h5 className="title"><a href="/#">Hacking Satellites with $300 Worth of TV</a></h5>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="game-episodes-item">
              <div className="thumb">
                <img src="assets/img/images/episode_thumb04.jpg" alt="" />
                <div className="episodes-tags">
                  <a href="/#">sports</a>
                </div>
              </div>
              <div className="content">
                <span className="date">December 19, 2022</span>
                <h5 className="title"><a href="/#">Hacking Satellites with $300 Worth of TV</a></h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default GameEpisodeArea