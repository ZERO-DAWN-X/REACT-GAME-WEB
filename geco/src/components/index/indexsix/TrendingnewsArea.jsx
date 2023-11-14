import React from 'react'
import Slider from "react-slick"






// function PrevArrow(props){
//     const {className,onClick} = props;
//     return(
//       <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-left"></i></button>
//     );
//   }
//   function NextArrow(props){
//     const {className,onClick} = props;
//     return(
//       <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-right"></i></button>
//     );
//   }

const TrendingnewsArea = () => {



    const settings ={

            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            // prevArrow:<PrevArrow/>,
            // nextArrow: <NextArrow/>,
            appendArrows: '.trending-news-nav',
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
                        slidesToShow: 3,
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
    <section className="trending-news-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="trending-news-head mb-40">
            <div className="hf-section-title">
              <h4 className="title">TReNDING NEWS</h4>
            </div>
            <div className="trending-news-nav bu"/>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="trending-news-item overlay-item">
                <div className="trend-news-thumb">
                  <img src="assets/img/blog/trand_news_thumb01.jpg" alt="" />
                </div>
                <div className="trend-news-content">
                  <div className="tags"><a href="/#">sports</a></div>
                  <span className="date">December 19, 2022</span>
                  <h4 className="title"><a href="/#">Markwas the night before in the NFL</a></h4>
                </div>
              </div>
            </div>
            <div className="col-md">
              <Slider className="trending-news-active" {...settings}>
                <div className="trending-news-item horizontal-item yellow">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb02.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">sports</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">US Promises to gives Intel aids</a></h4>
                  </div>
                </div>
                <div className="trending-news-item horizontal-item blue">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb03.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">game</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">At least 65 killed China Factory Explosion</a></h4>
                  </div>
                </div>
                <div className="trending-news-item horizontal-item">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb04.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">lives</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">Mark Sniper sell House where he Killed</a></h4>
                  </div>
                </div>
                <div className="trending-news-item horizontal-item blue">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb05.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">game</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">At least 65 killed China Factory Explosion</a></h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-7">
          <aside className="home-sidebar-news">
            <div className="hf-section-title mb-40">
              <h4 className="title">POPULAR NOW</h4>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="sidebar-popular-item">
                  <div className="sp-thumb">
                    <a href="/#"><img src="assets/img/blog/popular_post_thumb01.jpg" alt="" /></a>
                  </div>
                  <div className="sp-content">
                    <span className="date">35 minute ago</span>
                    <h6 className="title"><a href="/#">Two the night before in the NFL</a></h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="sidebar-popular-item">
                  <div className="sp-thumb">
                    <a href="/#"><img src="img/blog/popular_post_thumb02.jpg" alt="" /></a>
                  </div>
                  <div className="sp-content">
                    <span className="date">35 minute ago</span>
                    <h6 className="title"><a href="/#">Mark Sniper sell he Killed night</a></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="popular-banner-ad">
              <a href="/#"><img src="assets/img/images/popular_banner.jpg" alt="" /></a>
            </div>
          </aside>
        </div>
        <div className="col-12">
          <div className="magazine-banner-ad">
            <a href="/#"><img src="assets/img/images/buy_banner.jpg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TrendingnewsArea