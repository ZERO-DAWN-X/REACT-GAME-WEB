import React from 'react'
import Slider from 'react-slick';



const BannerArea = () => {


    const settings ={
    dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	centerMode: true,
	centerPadding: '0',
	slidesToShow: 3,
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
				slidesToShow: 1,
				slidesToScroll: 2,
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
    <section className="home-six-banner">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="banner-content">
            <h2 className="title-one">gaming</h2>
            <h3 className="title-two">world class <span>news</span></h3>
          </div>
          <div className="banner-news-heading">
            <div className="headline">
              <h5>News <span>Update</span></h5>
              <p>Here’s an updated look at the 2020 NFL.</p>
            </div>
            <div className="social-link">
              <ul>
                <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
              </ul>
            </div>
          </div>
          <Slider className="banner-magazine-active" {...settings}>
                    <div className="banner-magazine-item red">
                    <div className="banner-magazine-thumb">
                        <div className="tags"><a href="/#">sports</a></div>
                        <img src="assets/img/slider/banner_magazine_thumb02.jpg" alt="" />
                    </div>
                    <div className="banner-magazine-content">
                        <span className="date">December 19, 2022</span>
                        <h5 className="title"><a href="/#">UN chief condems atrocious Ghana killings</a></h5>
                    </div>
                    </div>

                    <div className="banner-magazine-item blue">
                    <div className="banner-magazine-thumb">
                        <div className="tags"><a href="/#">sports</a></div>
                        <img src="assets/img/slider/banner_magazine_thumb03.jpg" alt="" />
                    </div>
                    <div className="banner-magazine-content">
                        <span className="date">December 19, 2022</span>
                        <h5 className="title"><a href="/#">Hunger still quite persists in many of India's tribal</a></h5>
                    </div>
                    </div>
                    <div className="banner-magazine-item">
                    <div className="banner-magazine-thumb">
                        <div className="tags"><a href="/#">sports</a></div>
                        <img src="assets/img/slider/banner_magazine_thumb04.jpg" alt="" />
                    </div>
                    <div className="banner-magazine-content">
                        <span className="date">December 19, 2022</span>
                        <h5 className="title"><a href="/#">Hunger still quite persists in many of India's tribal</a></h5>
                    </div>
                    </div>
                    <div className="banner-magazine-item blue">
                    <div className="banner-magazine-thumb">
                        <div className="tags"><a href="/#">sports</a></div>
                        <img src="assets/img/slider/banner_magazine_thumb05.jpg" alt="" />
                    </div>
                    <div className="banner-magazine-content">
                        <span className="date">December 19, 2022</span>
                        <h5 className="title"><a href="/#">Hunger still quite persists in many of India's tribal</a></h5>
                    </div>
                    </div>
                    <div className="banner-magazine-item">
                    <div className="banner-magazine-thumb">
                        <div className="tags"><a href="/#">sports</a></div>
                        <img src="assets/img/slider/banner_magazine_thumb01.jpg" alt="" />
                    </div>
                    <div className="banner-magazine-content">
                        <span className="date">December 19, 2022</span>
                        <h5 className="title"><a href="/#">Hunger the night before in the NFL</a></h5>
                    </div>
                    </div>
          </Slider>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BannerArea