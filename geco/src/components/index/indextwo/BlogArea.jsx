import React from 'react'
import {Link} from 'react-router-dom'



function BlogArea() {
  return (
	<section className="blog-area pt-115 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-70">
                    <h2>Latest News <span>Articles</span></h2>
                    <p>Compete with 100 players on a remote island for winner takes showdown
                      known issue where certain skin strategic</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="blog-post blog-style-two mb-50">
                    <div className="blog-thumb mb-30">
                      <Link to="/#"><img src="assets/img/blog/s_blog_thumb01.jpg" alt="" /></Link>
                    </div>
                    <div className="blog-post-content">
                      <h4><Link to="/#">Shooter action video game</Link></h4>
                      <div className="blog-meta">
                        <ul>
                          <li><i className="far fa-clock" />July 4, 2022</li>
                          <li><i className="fas fa-tag" /><Link to="/#">Shooter</Link></li>
                        </ul>
                      </div>
                      <p>Compete with 100 players on a remote island for winner takes showdown known for issue where
                        certain skin strategic [...]</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-post blog-style-two mb-50">
                    <div className="blog-thumb mb-30">
                      <Link to="/#"><img src="assets/img/blog/s_blog_thumb02.jpg" alt="" /></Link>
                    </div>
                    <div className="blog-post-content">
                      <h4><Link to="/#">multiplayer environments</Link></h4>
                      <div className="blog-meta">
                        <ul>
                          <li><i className="far fa-clock" />July 4, 2022</li>
                          <li><i className="fas fa-tag" /><Link to="/#">Shooter</Link></li>
                        </ul>
                      </div>
                      <p>Compete with 100 players on a remote island for winner takes showdown known for issue where
                        certain skin strategic [...]</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-post blog-style-two mb-50">
                    <div className="blog-thumb mb-30">
                      <Link to="/#"><img src="assets/img/blog/s_blog_thumb03.jpg" alt="" /></Link>
                    </div>
                    <div className="blog-post-content">
                      <h4><Link to="/#">Bullet Force Multiplayer</Link></h4>
                      <div className="blog-meta">
                        <ul>
                          <li><i className="far fa-clock" />July 4, 2022</li>
                          <li><i className="fas fa-tag" /><Link to="/#">Shooter</Link></li>
                        </ul>
                      </div>
                      <p>Compete with 100 players on a remote island for winner takes showdown known for issue where
                        certain skin strategic [...]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default BlogArea