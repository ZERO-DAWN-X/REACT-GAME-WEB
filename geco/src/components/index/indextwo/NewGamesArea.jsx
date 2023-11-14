import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
function NewGamesArea() {
 
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1,slider2;


  useEffect(function(){
    setNav1(slider1)
    setNav2(slider2)
  },[slider1,slider2])
   
  
  return (
  
	<section className="released-games-area gray-bg pt-115 pb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-20">
                    <h2>released <span>GAMES</span></h2>
                    <p>Compete with 100 players on a remote island for winner takes showdown
                      known issue where certain skin strategic</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12">
                  <Slider className="released-game-active"
                  asNavFor={nav2}
                  ref={slider => (slider1 = slider)}
                  arrows={false}
                  >
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="assets/img/images/released_game_img01.jpg" alt="" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Call <span>of Duty</span></h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Virtual Game</li>
                              <li><span>Model :</span>Compete 100 players</li>
                              <li><span>Controller :</span>Playstation 5 , Xbox , PS4</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">buy now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="assets/img/images/released_game_img02.jpg" alt="" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Battle <span>Grounds</span></h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Virtual Game</li>
                              <li><span>Model :</span>Compete 100 players</li>
                              <li><span>Controller :</span>Playstation 5 , Xbox , PS4</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">buy now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="assets/img/images/released_game_img03.jpg" alt="" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Apex <span>Legends</span></h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Virtual Game</li>
                              <li><span>Model :</span>Compete 100 players</li>
                              <li><span>Controller :</span>Playstation 5 , Xbox , PS4</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">buy now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="assets/img/images/released_game_img03.jpg" alt="" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Monster <span>Hunter</span></h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Virtual Game</li>
                              <li><span>Model :</span>Compete 100 players</li>
                              <li><span>Controller :</span>Playstation 5 , Xbox , PS4</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">buy now</Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <Slider className="released-game-nav" 
                  asNavFor={nav1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  ref={slider => (slider2 = slider)} slidesToShow={3} vertical={true} arrows={false} >
                    <div className="released-game-nav-item">
                      <img src="assets/img/images/release_game_nav01.jpg" alt="" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src="assets/img/images/release_game_nav02.jpg" alt="" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src="assets/img/images/release_game_nav03.jpg" alt="" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src="assets/img/images/release_game_nav02.jpg" alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
  )
}

export default NewGamesArea