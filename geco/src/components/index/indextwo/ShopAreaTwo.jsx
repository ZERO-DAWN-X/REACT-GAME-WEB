import React from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
function ShopAreaTwo() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll:1,
    center:false,
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
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  }
  return (
	 <section className="shop-area black-bg pt-115 pb-90">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three white-title text-center mb-40">
                    <h2>Gaming Products <span>Corner</span></h2>
                    <p>Compete with 100 players on a remote island for winner takes showdown
                      known issue where certain skin strategic</p>
                  </div>
                </div>
              </div>
              <Slider className="row product-active" {...settings}>
                <div className="col-xl">
                  <div className="shop-item">
                    <div className="product-thumb">
                      <Link to="/#"><img src="assets/img/product/s_product_img01.jpg" alt="" /></Link>
                    </div>
                    <div className="product-content">
                      <div className="product-tag"><Link to="/#">t-shirt</Link></div>
                      <h4><Link to="/#">Women Black T-shirt</Link></h4>
                      <div className="product-meta">
                        <div className="product-price">
                          <h5>$29.00</h5>
                        </div>
                        <div className="product-cart-action">
                          <Link to="/#"><i className="fas fa-shopping-basket" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl">
                  <div className="shop-item">
                    <div className="product-thumb">
                      <Link to="/#"><img src="assets/img/product/s_product_img02.jpg" alt="" /></Link>
                    </div>
                    <div className="product-content">
                      <div className="product-tag"><Link to="/#">x-box</Link></div>
                      <h4><Link to="/#">Gears 5 Xbox Controller</Link></h4>
                      <div className="product-meta">
                        <div className="product-price">
                          <h5>$29.00</h5>
                        </div>
                        <div className="product-cart-action">
                          <Link to="/#"><i className="fas fa-shopping-basket" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl">
                  <div className="shop-item">
                    <div className="product-thumb">
                      <Link to="/#"><img src="assets/img/product/s_product_img03.jpg" alt="" /></Link>
                    </div>
                    <div className="product-content">
                      <div className="product-tag"><Link to="/#">graphics</Link></div>
                      <h4><Link to="/#">GeForce RTX 2070</Link></h4>
                      <div className="product-meta">
                        <div className="product-price">
                          <h5>$29.00</h5>
                        </div>
                        <div className="product-cart-action">
                          <Link to="/#"><i className="fas fa-shopping-basket" /></Link>
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

export default ShopAreaTwo