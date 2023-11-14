import React from 'react'
import { Link } from 'react-router-dom'

function FooterThree() {
  return (
	
      <footer>
        <div className="footer-top footer-bg third-footer-bg">
          <div className="container custom-container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="footer-widget mb-50">
                  <div className="logo mb-35">
                    <Link to="/index-3"><img src="assets/img/logo/f_logo.png" alt="" /></Link>
                  </div>
                  <div className="fw-text">
                    <p>The Legend of Zelda: Skyward Sword is an action-adventure gam developed
                      publish game real. was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    <div className="fw-social">
                      <ul>
                        <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
                        <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-5">
                <div className="footer-widget text-right mb-50">
                  <div className="fw-title mb-35">
                    <h3>Quick <span>Link</span></h3>
                  </div>
                  <div className="fw-quick-link">
                    <ul>
                      <li><a href="/#">About Us</a></li>
                      <li><a href="/#">Privacy &amp; Police</a></li>
                      <li><a href="/#">Our Gallery</a></li>
                      <li><a href="/#">Donations</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap third-copyright-wrap">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>Copyright © 2022 <Link to="/">Geco</Link> All Rights Reserved.</p>
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

export default FooterThree