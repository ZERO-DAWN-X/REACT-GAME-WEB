import React from 'react';
import Slider from 'react-slick';
import TestimonialArea from './TestimonialArea';


function PrevArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><i className="fa fa-angle-left"></i></button>
  );
}
function NextArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><i className="fa fa-angle-right"></i></button>
  );
}

export default function ShopArea() {
		const settings = {

  dots: false,
  margin:5,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
	prevArrow: <PrevArrow/>,
	nextArrow: <NextArrow/>,
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
	]
  }
  return (
	   <div className="area-bg-two">
        {/* shop-area */}
        <section className="shop-area pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-title title-style-two text-center mb-30">
                  <span>gaming accessories</span>
                  <h2>Gaming Products <span>Corner</span></h2>
                </div>
              </div>
            </div>
            <Slider className="row product-active "{...settings}>
              <div className="col-xl">
                <div className="shop-item">
                  <div className="product-thumb">
                    <a href="/#"><img src="assets/img/product/product_img01.jpg" alt="" /></a>
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
                    <a href="/#"><img src="assets/img/product/product_img02.jpg" alt="" /></a>
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
                    <a href="/#"><img src="assets/img/product/product_img03.jpg" alt="" /></a>
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
                    <a href="/#"><img src="assets/img/product/product_img04.jpg" alt="" /></a>
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
                    <a href="/#"><img src="assets/img/product/product_img04.jpg" alt="" /></a>
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
        {/* shop-area-end */}


        {/* blog-testimonial-area */}
        <section className="blog-and-testimonial">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="blog-area mb-120">
                  <div className="tournament-top-wrap">
                    <div className="section-title tournament-title">
                      <h2>Latest News <span>Articles</span></h2>
                    </div>
                  </div>
                  <div className="blog-post-wrap">
                    <div className="blog-post-item blog-style-one">
                      <div className="blog-thumb">
                        <a href="/#"><img src="assets/img/blog/blog_thumb01.jpg" alt="" /></a>
                      </div>
                      <div className="blog-post-content">
                        <h5><a href="/#">Reality can include entertain</a></h5>
                        <div className="blog-meta">
                          <ul>
                            <li><i className="far fa-clock" />July 4, 2022</li>
                            <li><i className="fas fa-comment" />03</li>
                            <li><i className="fas fa-heart" />26</li>
                          </ul>
                        </div>
                        <p>Game server also sometimes referred to as host server which source</p>
                      </div>
                    </div>
                    <div className="blog-post-item blog-style-one">
                      <div className="blog-thumb">
                        <a href="/#"><img src="assets/img/blog/blog_thumb02.jpg" alt="" /></a>
                      </div>
                      <div className="blog-post-content">
                        <h5><a href="/#">Simulated experience simila</a></h5>
                        <div className="blog-meta">
                          <ul>
                            <li><i className="far fa-clock" />July 4, 2022</li>
                            <li><i className="fas fa-comment" />03</li>
                            <li><i className="fas fa-heart" />26</li>
                          </ul>
                        </div>
                        <p>Game server also sometimes referred to as host server which source</p>
                      </div>
                    </div>
                    <div className="blog-post-item blog-style-one">
                      <div className="blog-thumb">
                        <a href="/#"><img src="assets/img/blog/blog_thumb03.jpg" alt="" /></a>
                      </div>
                      <div className="blog-post-content">
                        <h5><a href="/#">High Performance Server</a></h5>
                        <div className="blog-meta">
                          <ul>
                            <li><i className="far fa-clock" />July 4, 2022</li>
                            <li><i className="fas fa-comment" />03</li>
                            <li><i className="fas fa-heart" />26</li>
                          </ul>
                        </div>
                        <p>Game server also sometimes referred to as host server which source</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* testomnial area */}
              <TestimonialArea/>
            </div>
          </div>
        </section>
        {/* blog-testimonial-area-end */}
      </div>
  )
}
