import React from 'react'
import Slider from "react-slick"



// function PrevArrow(props){
//   const {className,onClick} = props;
//   return(
//     <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-left"></i></button>
//   );
// }
// function NextArrow(props){
//   const {className,onClick} = props;
//   return(
//     <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-right"></i></button>
//   );
// }

const GamesNewsArea = () => {
   const settings={
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow:<PrevArrow/>,
    // nextArrow: <NextArrow/>,
    appendArrows: '.community-news-nav',
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
    <section className="latest-game-news-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="hf-section-title mb-40">
            <h4 className="title">latest news</h4>
          </div>
          <div className="latest-game-news-item">
            <div className="lgn-thumb">
              <a href="/#"><img src="assets/img/blog/lgn_thumb01.jpg" alt="" /></a>
            </div>
            <div className="trend-news-content">
              <div className="tags"><a href="/#">sports</a></div>
              <span className="date">December 19, 2022</span>
              <h4 className="title"><a href="/#">Director of nation intelligence Trump ignored</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
          </div>
          <div className="latest-game-news-item green">
            <div className="lgn-thumb">
              <a href="/#"><img src="assets/img/blog/lgn_thumb02.jpg" alt="" /></a>
            </div>
            <div className="trend-news-content">
              <div className="tags"><a href="/#">sports</a></div>
              <span className="date">December 19, 2022</span>
              <h4 className="title"><a href="/#">House last week that move would Inject</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
          </div>
          <div className="latest-game-news-item blue">
            <div className="lgn-thumb">
              <a href="/#"><img src="assets/img/blog/lgn_thumb03.jpg" alt="" /></a>
            </div>
            <div className="trend-news-content">
              <div className="tags"><a href="/#">sports</a></div>
              <span className="date">December 19, 2022</span>
              <h4 className="title"><a href="/#">50 Years After The Moon Landing How Close Really?</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
          </div>
          <div className="pagination-wrap mt-60">
            <ul>
              <li><a href="/#">first</a></li>
              <li><a href="/#">1</a></li>
              <li><a href="/#">2</a></li>
              <li><a href="/#">next</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <aside className="home-sidebar-news">
            <div className="business-news-head mb-45">
              <div className="hf-section-title">
                <h4 className="title">Community</h4>
              </div>
              <div className="community-news-nav" />
            </div>
            <Slider className="community-news-active" {...settings}>
              <div className="business-news-item">
                <div className="business-news-post">
                  <a href="/#"><img src="assets/img/blog/business_blog03.jpg" alt="" /></a>
                </div>
                <div className="trending-news-item horizontal-item blue">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb02.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">sports</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">House last week that move would</a></h4>
                  </div>
                </div>
                <div className="trending-news-item horizontal-item">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb05.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">game</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">Twas the night before in the NFL</a></h4>
                  </div>
                </div>
              </div>
              <div className="business-news-item">
                <div className="business-news-post">
                  <a href="/#"><img src="assets/img/blog/business_blog02.jpg" alt="" /></a>
                </div>
                <div className="trending-news-item horizontal-item blue">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb02.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">sports</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">House last week that move would</a></h4>
                  </div>
                </div>
                <div className="trending-news-item horizontal-item">
                  <div className="trend-news-thumb">
                    <a href="/#"><img src="assets/img/blog/trand_news_thumb05.jpg" alt="" /></a>
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><a href="/#">game</a></div>
                    <span className="date">December 19, 2022</span>
                    <h4 className="title"><a href="/#">Twas the night before in the NFL</a></h4>
                  </div>
                </div>
              </div>
            </Slider>
          </aside>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GamesNewsArea