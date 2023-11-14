import React from 'react';

function Footer() {
  return (
	   <footer>
        <div className="footer-top footer-bg">
          {/* newsletter-area */}
          <div className="newsletter-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="newsletter-wrap">
                    <div className="section-title newsletter-title">
                      <h2>Our <span>Newsletter</span></h2>
                    </div>
                    <div className="newsletter-form">
                      <form>
                        <div className="newsletter-form-grp">
                          <i className="far fa-envelope" />
                          <input type="email" placeholder="Enter your email..." />
                        </div>
                        <button>SUBSCRIBE <i className="fas fa-paper-plane" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* newsletter-area-end */}
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="footer-logo mb-35">
                    <a href="/"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                  <div className="footer-text">
                    <p>Gemas marketplace the relase etras thats sheets continig passag.</p>
                    <div className="footer-contact">
                      <ul>
                        <li><i className="fas fa-map-marker-alt" /> <span>Address : </span>PO Box W75 Street
                          lan West new queens</li>
                        <li><i className="fas fa-headphones" /> <span>Phone : </span>+24 1245 654 235</li>
                        <li><i className="fas fa-envelope-open" /><span>Email : </span>info@exemple.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Products</h5>
                  </div>
                  <div className="fw-link">
                    <ul>
                      <li><a  href="/#">Graphics (26)</a></li>
                      <li><a  href="/#">Backgrounds (11)</a></li>
                      <li><a  href="/#">Fonts (9)</a></li>
                      <li><a  href="/#">Music (3)</a></li>
                      <li><a  href="/#">Photography (3)</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Need Help?</h5>
                  </div>
                  <div className="fw-link">
                    <ul>
                      <li><a  href="/#">Terms &amp; Conditions</a></li>
                      <li><a  href="/#">Privacy Policy</a></li>
                      <li><a  href="/#">Refund Policy</a></li>
                      <li><a  href="/#">Affiliate</a></li>
                      <li><a  href="/#">FAQUse Cases</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Follow us</h5>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li><a  href="/#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a  href="/#"><i className="fab fa-twitter" /></a></li>
                      <li><a  href="/#"><i className="fab fa-pinterest-p" /></a></li>
                      <li><a  href="/#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Newsletter Sign Up</h5>
                  </div>
                  <div className="footer-newsletter">
                    <form >
                      <input type="text" placeholder="Enter your email" />
                      <button><i className="fas fa-rocket" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-fire"><img src="assets/img/images/footer_fire.png" alt="" /></div>
          <div className="footer-fire footer-fire-right"><img src="assets/img/images/footer_fire.png" alt="" /></div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>Copyright © 2022 <a  href="/#">Geco</a> All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-none d-md-block">
                <div className="payment-method-img text-right">
                  <img src="assets/img/images/card_img.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
