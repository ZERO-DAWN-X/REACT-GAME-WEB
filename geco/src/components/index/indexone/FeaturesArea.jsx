import React from 'react';
import Counter from './Counter';
function FeaturesArea() {
  return (
	  <section className="features-area features-bg pt-120 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title title-style-two text-center mb-60">
                <span>what we give players</span>
                <h2>Why Choose Us <span>Geco</span></h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="features-item mb-30">
                <div className="features-head mb-35">
                  <div className="product-tag"><a href="/#">t-shirt</a></div>
                  <h4>Gamine slim elegant young woman perceived</h4>
                  <p>Consecur adipcig eiusod tempor the inci did dolore mana is aliqsua Unimd minim thats tempor dolore adipcig</p>
                </div>
                <div className="features-list-wrap">
                  <ul>
                    <li>
                      <div className="features-list-img">
                        <img src="assets/img/images/features_thumb01.jpg" alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="product-tag"><a href="/#">zombie</a></div>
                        <h6><a href="/#">Who hangs around the streets</a></h6>
                      </div>
                    </li>
                    <li>
                      <div className="features-list-img">
                        <img src="assets/img/images/features_thumb02.jpg" alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="product-tag"><a href="/#">shooter</a></div>
                        <h6><a href="/#">Design compose copratin</a></h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="features-item mb-30">
                <div className="features-head mb-35">
                  <div className="product-tag"><a href="/#">Cloud</a></div>
                  <h4>Leading Games Retailer with Great Deals Video</h4>
                  <p>Consecur adipcig eiusod tempor the inci did dolore mana is aliqsua Unimd minim thats tempor dolore adipcig</p>
                </div>
                <div className="features-list-wrap">
                  <ul>
                    <li>
                      <div className="features-list-img">
                        <img src="assets/img/images/features_thumb03.jpg" alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="product-tag"><a href="/#">zombie</a></div>
                        <h6><a href="/#">Design compose copratin</a></h6>
                      </div>
                    </li>
                    <li>
                      <div className="features-list-img">
                        <img src="assets/img/images/features_thumb04.jpg" alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="product-tag"><a href="/#">shooter</a></div>
                        <h6><a href="/#">Who hangs around the streets</a></h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="features-item mb-30">
                <div className="features-head mb-35">
                  <div className="product-tag"><a href="/#">islands</a></div>
                  <h4>The word gamine is a French word, the feminine</h4>
                  <p>Consecur adipcig eiusod tempor the inci did dolore mana is aliqsua Unimd minim thats tempor dolore
                    adipcig</p>
                </div>
                <div className="features-list-wrap">
                  <ul>
                    <li>
                      <div className="features-list-img">
                        <img src="assets/img/images/features_thumb05.jpg" alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="product-tag"><a href="/#">zombie</a></div>
                        <h6><a href="/#">Who hangs around the streets</a></h6>
                      </div>
                    </li>
                    <li>
                      <div className="features-list-img">
                        <img src="assets/img/images/features_thumb06.jpg" alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="product-tag"><a href="/#">shooter</a></div>
                        <h6><a href="/#">Design compose copratin</a></h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Counter/>
        </div>
      </section>
  )
}
export default FeaturesArea;
