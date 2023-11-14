import React from 'react'
import Slider from "react-slick";


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
const WorldNewsArea = () => {
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
	appendArrows: '.business-news-nav',
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
    <section className="world-news-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hf-section-title mb-40">
                <h4 className="title">WORLD NEWS</h4>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="world-news-item mb-30">
                    <div className="banner-magazine-thumb">
                      <div className="tags"><a href="/#">sports</a></div>
                      <img src="assets/img/blog/world_news_thumb01.jpg" alt="" />
                    </div>
                    <div className="banner-magazine-content">
                      <span className="date">December 19, 2022</span>
                      <h5 className="title"><a href="/#">50 Years After The Moon Landing NEL</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="world-news-item mb-30">
                    <div className="banner-magazine-thumb">
                      <div className="tags"><a href="/#">sports</a></div>
                      <img src="assets/img/blog/world_news_thumb02.jpg" alt="" />
                    </div>
                    <div className="banner-magazine-content">
                      <span className="date">December 19, 2022</span>
                      <h5 className="title"><a href="/#">Twas the night before in the NFLL</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <aside className="home-sidebar-news">
                <div className="business-news-head mb-45">
                  <div className="hf-section-title">
                    <h4 className="title">Business</h4>
                  </div>
                  <div className="business-news-nav" />
                </div>
                <Slider className="business-news-active " {...settings}>
                  <div className="business-news-item">
                    <div className="business-news-post">
                      <a href="/#"><img src="assets/img/blog/business_blog.jpg" alt="" /></a>
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

export default WorldNewsArea