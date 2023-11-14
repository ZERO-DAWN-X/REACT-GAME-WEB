import React from 'react'

function ContactArea() {
  return (
	  <section className="contact-area third-contact-bg">
            <div className="container custom-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="third-contact-wrap">
                    <div className="third-title-style">
                      <h2>contact<span>us</span></h2>
                      <div className="inner">
                        <h2>MEET oue team</h2>
                        <h6 className="vertical-title">donation</h6>
                        <ul>
                          <li><span>our location :</span> Central Park Roselle W78 New Jersey</li>
                          <li><span>Phone :</span> + 97 325 6254 324</li>
                        </ul>
                      </div>
                      <a href="/#" className="btn rotated-btn">buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form  className="third-contact-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Your Phone" />
                      </div>
                    </div>
                    <textarea name="message" id="message" placeholder="Wight Message" defaultValue={""} />
                    <button className="btn rotated-btn">submit</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
  )
}

export default ContactArea