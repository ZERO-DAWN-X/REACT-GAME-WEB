import React from 'react'
import Slider from "react-slick";

const ShopArea = () => {

  const settings= {

  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
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
      }
    },
	{
		slidesToShow:1
	}
  ]
  }
  return (
    <section className="shop-area home-four-shop-area pt-115 pb-90">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="section-title home-four-title text-center mb-35">
            <h2>gaming product <span>corner</span></h2>
            <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
          </div>
        </div>
      </div>
      <Slider className="row product-active"{...settings}>
        <div className="col-xl">
          <div className="shop-item">
            <div className="product-thumb">
              <a href="/#"><img src="assets/img/product/s_product_img01.jpg" alt="" /></a>
            </div>
            <div className="product-content">
              <div className="product-tag"><a href="/#">t-shirt</a></div>
              <h4><a href="/#">Women Black T-shirt</a></h4>
              <div className="product-meta">
                <div className="product-price">
                  <h5>$29.00</h5>
                </div>
                <div className="product-cart-action">
                  <a href="/#"><i className="fas fa-shopping-basket" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl">
          <div className="shop-item">
            <div className="product-thumb">
              <a href="/#"><img src="assets/img/product/s_product_img02.jpg" alt="" /></a>
            </div>
            <div className="product-content">
              <div className="product-tag"><a href="/#">x-box</a></div>
              <h4><a href="/#">Gears 5 Xbox Controller</a></h4>
              <div className="product-meta">
                <div className="product-price">
                  <h5>$29.00</h5>
                </div>
                <div className="product-cart-action">
                  <a href="/#"><i className="fas fa-shopping-basket" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl">
          <div className="shop-item">
            <div className="product-thumb">
              <a href="/#"><img src="assets/img/product/s_product_img03.jpg" alt="" /></a>
            </div>
            <div className="product-content">
              <div className="product-tag"><a href="/#">graphics</a></div>
              <h4><a href="/#">GeForce RTX 2070</a></h4>
              <div className="product-meta">
                <div className="product-price">
                  <h5>$29.00</h5>
                </div>
                <div className="product-cart-action">
                  <a href="/#"><i className="fas fa-shopping-basket" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl">
          <div className="shop-item">
            <div className="product-thumb">
              <a href="/#"><img src="assets/img/product/s_product_img04.jpg" alt="" /></a>
            </div>
            <div className="product-content">
              <div className="product-tag"><a href="/#">VR-Box</a></div>
              <h4><a href="/#">Virtual Reality Smiled</a></h4>
              <div className="product-meta">
                <div className="product-price">
                  <h5>$29.00</h5>
                </div>
                <div className="product-cart-action">
                  <a href="/#"><i className="fas fa-shopping-basket" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl">
          <div className="shop-item">
            <div className="product-thumb">
              <a href="/#"><img src="assets/img/product/s_product_img04.jpg" alt="" /></a>
            </div>
            <div className="product-content">
              <div className="product-tag"><a href="/#">VR-Box</a></div>
              <h4><a href="/#">Virtual Reality Smiled</a></h4>
              <div className="product-meta">
                <div className="product-price">
                  <h5>$29.00</h5>
                </div>
                <div className="product-cart-action">
                  <a href="/#"><i className="fas fa-shopping-basket" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </section>
  )
}

export default ShopArea