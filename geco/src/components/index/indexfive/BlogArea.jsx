import React from 'react'

const BlogArea = () => {
  return (
    <section className="video-blog-area pt-80 pb-80">
    <div className="container">
      <div className="row align-items-center mb-30">
        <div className="col-sm-6">
          <div className="hf-section-title">
            <h4 className="title">Latest article</h4>
          </div>
        </div>
        <div className="col-sm-6 d-none d-sm-block">
          <div className="section-btn">
            <a href="/#" className="border-btn"><i className="fas fa-play" /> Watch Now</a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="video-blog-item mb-50">
            <div className="video-blog-thumb">
              <a href="/blog-details"><img src="assets/img/blog/h5_blog_thumb01.jpg" alt="" /></a>
            </div>
            <div className="video-blog-content">
              <div className="video-blog-meta">
                <ul>
                  <li><i className="far fa-clock" /> Mar 10, 2022</li>
                  <li><a href="/#"><i className="far fa-comments" /> 0 Comment</a></li>
                </ul>
              </div>
              <h4 className="title"><a href="/blog-details">Animated Short Film: "Thatching Eggs" by Max Marlow</a></h4>
              <a href="/blog-details" className="read-more">Read More <i className="fas fa-caret-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="video-blog-item mb-50">
            <div className="video-blog-thumb">
              <a href="/blog-details"><img src="assets/img/blog/h5_blog_thumb02.jpg" alt="" /></a>
            </div>
            <div className="video-blog-content">
              <div className="video-blog-meta">
                <ul>
                  <li><i className="far fa-clock" /> Mar 10, 2022</li>
                  <li><a href="/#"><i className="far fa-comments" /> 0 Comment</a></li>
                </ul>
              </div>
              <h4 className="title"><a href="/blog-details">Swagbucks Games, you have direct access</a></h4>
              <a href="/blog-details" className="read-more">Read More <i className="fas fa-caret-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="video-blog-item mb-50">
            <div className="video-blog-thumb">
              <a href="/blog-details"><img src="assets/img/blog/h5_blog_thumb03.jpg" alt="" /></a>
            </div>
            <div className="video-blog-content">
              <div className="video-blog-meta">
                <ul>
                  <li><i className="far fa-clock" /> Mar 10, 2022</li>
                  <li><a href="/#"><i className="far fa-comments" /> 0 Comment</a></li>
                </ul>
              </div>
              <h4 className="title"><a href="/blog-details">Popular card game is a modern versionby Max</a></h4>
              <a href="/blog-details" className="read-more">Read More <i className="fas fa-caret-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogArea