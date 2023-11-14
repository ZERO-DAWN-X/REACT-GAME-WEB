import React from 'react'
import { Link } from 'react-router-dom';


function Breadcrumb() {
  return (
	
      <div className="breadcrumb-area breadcrumb-bg game-overview-breadcrumb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className="game-overview-img">
                <img src="assets/img/images/game_overview_thumb.png" alt="" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="breadcrumb-content text-center text-lg-left pl-80">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a href="/#">pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">game single</li>
                  </ol>
                </nav>
                <h2>PGS AMERICAS <span>2022</span></h2>
                <div className="game-overview-status">
                  <ul>
                    <li><span>Total Wins :</span> 21</li>
                    <li><span>Membership :</span>November 9, 2022</li>
                    <li><span>Categories :</span>Platinum ||</li>
                  </ul>
                </div>
                <a href="/#" className="btn btn-style-two">join now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Breadcrumb