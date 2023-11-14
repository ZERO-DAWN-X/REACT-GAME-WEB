import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import ScrollToTop from "react-scroll-to-top";



export default function HeaderTwo() {

  
  useEffect(()=>{
    //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .push-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(500);
        });


        $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
          $('body').removeClass('mobile-menu-visible');
        })


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });
      }
      

  },[]);

  useEffect(()=>{
    
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');
    
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
      }
    });
    
  },[])


  
  return (
	 <header> 
     <ScrollToTop smooth top="500" color="#000"/>
          <div className="header-top-area s-header-top-area d-none d-lg-block">
            <div className="container-fluid s-container-full-padding">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="header-top-offer">
                    <p>Exclusive Black Friday ! Offer</p>
                    <span className="coming-time" data-countdown="2022/3/15" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header-top-right">
                    <div className="header-social">
                      <ul>
                        <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="/#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link to="/#"><i className="fab fa-linkedin-in" /></Link></li>
                      </ul>
                    </div>
                    <div className="header-top-action">
                      <ul>
                        <li>
                          <div className="header-top-mail">
                            <p><span>|</span><i className="far fa-envelope" /><Link to="/mailto:info@gmail.com">info@gecoinfo.com</Link></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sticky-header" className="transparent-header menu-area">
            <div className="container-fluid s-container-full-padding">
              <div className="row">
                <div className="col-12">
                <div className="mobile-nav-toggler two"><i className="fas fa-bars" /></div>
                  <div className="main-menu  menu-style-two">
                    <nav>
                      <div className="logo">
                        <Link to="/"><img src="assets/img/logo/logo.png" alt="Logo" /></Link>
                      </div>
                      <div className="navbar-wrap push-menu d-none d-lg-flex">
                        <ul className="navigation">
                          <li className="show  menu-item-has-children"><Link to="/">Home</Link>
                            <ul className="submenu">
                              <li ><Link to="/">Home One</Link></li>
                              <li><Link to="/index-2">Home Two</Link></li>
                              <li><Link to="/index-3">Home Three</Link></li>
                              <li ><Link to="/index-4">Home Four</Link></li>
                              <li><Link to="/index-5">Home Five</Link></li>
                              <li><Link to="/index-6">Home Six</Link></li>
                              <li><Link to="/index-7">Home Seven</Link></li>
                             
                            </ul>
                          </li>
                          <li className='menu-item-has-children'><Link to="/about-us">Pages</Link>
                            <ul className="submenu">
                              <li><Link to="/about-us">About Story</Link></li>
                              <li><Link to="/upcoming-games">Upcoming Games</Link></li>
                              <li><Link to="/game-single">Game Single</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/overview">Overview</Link></li>
                          <li><Link to="/community">Community</Link></li>
                          <li><Link to="/shop">Store</Link></li>
                          <li className='menu-item-has-children'><Link to="/blogs">Blog</Link>
                            <ul className="submenu">
                              <li><Link to="/blogs">News Page</Link></li>
                              <li><Link to="/blog-details">News Details</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/contact">contact</Link></li>
                        </ul>
                      </div>
                      <div className="header-action">
                        <ul>
                          <li className="header-shop-cart"><Link to="/"><i className="fas fa-shopping-basket" /><span>0</span></Link>
                            <ul className="minicart">
                              <li className="d-flex align-items-start">
                                <div className="cart-img">
                                  <a href="/#">
                                    <img src="assets/img/product/cart_p01.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="cart-content">
                                  <h4>
                                    <a href="/#">Xbox One Controller</a>
                                  </h4>
                                  <div className="cart-price">
                                    <span className="new">$229.9</span>
                                    <span>
                                      <del>$229.9</del>
                                    </span>
                                  </div>
                                </div>
                                <div className="del-icon">
                                  <a href="/#">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="total-price">
                                  <span className="f-left">Total:</span>
                                  <span className="f-right">$239.9</span>
                                </div>
                              </li>
                              <li>
                                <div className="checkout-link">
                                  <a href="/#">Shopping Cart</a>
                                  <Link className="red-color" to="/checkout">Checkout</Link>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="header-search"><a href="/#" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search" /></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                
                 <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fas fa-times" /></div>
                    <div className="nav-logo"><Link to="/"><img src="assets/img/logo/logo.png" alt="" title='true' /></Link>
                    </div>
                    <div className="menu-outer">
                  
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                        <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                        <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                        <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
              </div>
                {/* Modal Search */}
                <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <form>
                        <input type="text" placeholder="Search here..." />
                        <button><i className="fa fa-search" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}
