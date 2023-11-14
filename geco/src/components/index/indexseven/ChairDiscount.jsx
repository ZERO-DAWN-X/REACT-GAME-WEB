import React from 'react'

const ChairDiscount = () => {
  return (
    <section className="chair-discount-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="chair-discount-img">
                <img src="assets/img/images/chair_discount_img.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="chair-discount-content">
                <div className="game-shop-title mb-25">
                  <h2 className="title">Never <br /> miss 35% off</h2>
                </div>
                <p>Lorem ipsum dolor sit amet thats consectetur incididunt labore dolore.</p>
                <a href="/#" className="btn">buy now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ChairDiscount