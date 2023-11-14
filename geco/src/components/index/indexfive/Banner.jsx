import React from 'react'
import Fade from  "react-reveal/Fade";

const Banner = () => {


  
  return (
    <section className="home-five-banner">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-8">
          <div className="banner-content">
            <Fade left  delay={.2000}>
            <h6 className="sub-title wow fadeInUp">best of 2022</h6>
            </Fade>
            <Fade left  delay={.4000}>
            <h2 className="title-one">gaming</h2>
            </Fade>
            <Fade left  delay={.6000}>
            <h3 className="title-two" >world class <span>news</span></h3>
            </Fade>
            <Fade left  delay={.8000}>
            <div className="banner-meta" />
            
            </Fade>
           
              <ul>
                <li className="quality">
                  <span>Pg 18</span>
                  <span>hd</span>
                </li>
                <li className="category">
                  <a href="/#">Romance,</a>
                  <a href="/#">Drama</a>
                </li>
                <li className="release-time">
                  <span><i className="far fa-calendar-alt" /> 2022</span>
                  <span><i className="far fa-clock" /> 128 min</span>
                </li>
              </ul>
            </div>
            <Fade up delay={1.8}>
            <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="border-btn popup-video wow fadeInUp" data-wow-delay="1s" data-wow-duration="1.8s">
              <i className="fas fa-play" /> Watch Now</a>
              </Fade>
          </div>
        </div>
      </div>
    

   </section>
  )
}

export default Banner