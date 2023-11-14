import React from 'react'
import {Link} from 'react-router-dom';

function Breadcrumb() {
  return (
	<section className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content text-center">
                <h2>our<span>community</span></h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/pages">pages</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">community</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Breadcrumb