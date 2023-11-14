import React from 'react';
import CountUp from "react-countup";



export default function Counter() {


  return (
	    <div className="fact-area pt-90">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/fact_icon01.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span>< CountUp end={75} /></span></h2>
                    <span>Amazing Feature</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/fact_icon02.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span> < CountUp end={200} /> </span></h2>
                    <span>Amazing Feature</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/fact_icon03.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span>< CountUp end={315} /></span></h2>
                    <span>Amazing Feature</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/fact_icon04.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span >< CountUp end={400} /></span></h2>
                    <span>Amazing Feature</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
