import React,{ useState } from 'react';
import Menu from "../../Menu";

export default function GamesManage() {

  const[items, setItems] = useState(Menu);
  const filterItem = (categItem)=>{
    const updatedItems = Menu.filter((curElem)=>{

      return curElem.category === categItem; 
    })
    setItems(updatedItems);
  }
  return (
    
	  <section className="game-manage-area game-mange-bg pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title title-style-two text-center mb-60">
                <span>COME THE END OF THE WORLD</span>
                <h2>Focus And Game <span>Manage</span></h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="coming-match-item mb-30">
                <div className="coming-match-team">
                  <div className="match-team-info">
                    <div className="match-team-logo">
                      <a href="/#"><img src="assets/img/team/team_logo01.png" alt="" /></a>
                    </div>
                    <div className="match-team-name">
                      <a href="/#">Bluster 8</a>
                    </div>
                  </div>
                  <div className="coming-match-status">
                    <img src="assets/img/team/match_vs.png" alt="" />
                  </div>
                  <div className="match-team-info">
                    <div className="match-team-logo">
                      <a href="/#"><img src="assets/img/team/team_logo02.png" alt="" /></a>
                    </div>
                    <div className="match-team-name">
                      <a href="/#">kill bill 7</a>
                    </div>
                  </div>
                </div>
                <div className="coming-match-info">
                  <h5>Forza <span>Horizon ii</span></h5>
                  <div className="match-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="match-info-action">
                    <a href="/#" className="btn">view details</a>
                    <a href="/#" className="btn transparent-btn"><i className="fas fa-comments" /> Comments</a>
                  </div>
                </div>
                <div className="coming-match-time">
                  <div className="coming-time" data-countdown="2022/3/15" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="coming-match-item mb-30">
                <div className="coming-match-team">
                  <div className="match-team-info">
                    <div className="match-team-logo">
                      <a href="/#"><img src="assets/img/team/team_logo03.png" alt="" /></a>
                    </div>
                    <div className="match-team-name">
                      <a href="/#">Bluster 8</a>
                    </div>
                  </div>
                  <div className="coming-match-status">
                    <img src="assets/img/team/match_vs.png" alt="" />
                  </div>
                  <div className="match-team-info">
                    <div className="match-team-logo">
                      <a href="/#"><img src="assets/img/team/team_logo04.png" alt="" /></a>
                    </div>
                    <div className="match-team-name">
                      <a href="/#">The Champ</a>
                    </div>
                  </div>
                </div>
                <div className="coming-match-info">
                  <h5>Thanos <span>Sky ii</span></h5>
                  <div className="match-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="match-info-action">
                    <a href="/#" className="btn">view details</a>
                    <a href="/#" className="btn transparent-btn"><i className="fas fa-comments" /> Comments</a>
                  </div>
                </div>
                <div className="coming-match-time">
                  <div className="coming-time" data-countdown="2021/3/30" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="coming-match-item mb-30">
                <div className="coming-match-team">
                  <div className="match-team-info">
                    <div className="match-team-logo">
                      <a href="/#"><img src="assets/img/team/team_logo05.png" alt="" /></a>
                    </div>
                    <div className="match-team-name">
                      <a href="/#">Warrior</a>
                    </div>
                  </div>
                  <div className="coming-match-status">
                    <img src="assets/img/team/match_vs.png" alt="" />
                  </div>
                  <div className="match-team-info">
                    <div className="match-team-logo">
                      <a href="/#"><img src="assets/img/team/team_logo06.png" alt="" /></a>
                    </div>
                    <div className="match-team-name">
                      <a href="/#">kill bill 7</a>
                    </div>
                  </div>
                </div>
                <div className="coming-match-info">
                  <h5>Hunter <span>Killer ii</span></h5>
                  <div className="match-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="match-info-action">
                    <a href="/#" className="btn">view details</a>
                    <a href="/#" className="btn transparent-btn"><i className="fas fa-comments" /> Comments</a>
                  </div>
                </div>
                <div className="coming-match-time">
                  <div className="coming-time" data-countdown="2022/3/30" />
                </div>
              </div>
            </div>
          </div>
          <div className="tournament-area mt-30">
            <div className="row">
              <div className="col-12">
                <div className="tournament-top-wrap">
                  <div className="section-title tournament-title">
                    <h2>Joining <span>Tournament</span></h2>
                  </div>
                  <div className="tournament-menu">
                    <button className="active" data-filter="*" onClick={()=> setItems(Menu)}>All</button>
                    <button  data-filter=".cat-one"onClick={()=> filterItem('Gamer')}>GAMER</button>
                    <button  data-filter=".cat-two"onClick={()=> filterItem('Profesional')}>PROFESSIONAL</button>
                    <button  data-filter=".cat-three"onClick={()=> filterItem('Adventure')}>ADVENTURE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
                         {                        
                           items.map((elem)=>{
                              const {id,image1,image2,image3,title,description,price,btn} = elem;
                              return( 
                              
                                  <div className="col-12" key={id}>
                                   <div className="tournament-schedule-wrap">
                                    <div className="tournament-active">
                                        <div className="single-tournament mb-15 grid-item cat-three cat-two">
                                            <div className="row no-gutters">
                                                <div className="col-lg-4">
                                                    <div className="tournament-schedule-item">
                                                        <div className="match-team-info">
                                                              <div className="match-team-logo">
                                                                <a href="/#"><img src={image1} alt="" /></a>
                                                              </div>
                                                        </div>
                                                          <div className="coming-match-status">
                                                            <img src={image2} alt="" />
                                                          </div>
                                                          <div className="match-team-info">
                                                            <div className="match-team-logo">
                                                              <a href="/#"><img src={image3} alt="" /></a>
                                                            </div>
                                                          </div>
                                                    </div>
                                                </div>
                                                      <div className="col-lg-8">
                                                        <div className="tournament-schedule-content">
                                                          <h3><a href="/#">{title} </a></h3>
                                                          <p>{description}</p>
                                                          <div className="tournament-schedule-meta">
                                                            <h5>price : <span>{price}</span></h5>
                                                            <a href="/#">{btn}</a>
                                                          </div>
                                                        </div>
                                                      </div>
                                            </div>
                                        </div>
                                    
                                    
                                     </div>
                                   </div>
                                </div>
                                )
                          })
                        }
             
             </div>
           </div>
        </div>
      </section>
  )
}
