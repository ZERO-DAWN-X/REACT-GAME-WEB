import React from 'react'
import { Link } from "react-router-dom"

function Blogarea() {
  return (
	   <section className="blog-area primary-bg pt-120 pb-175">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-list-post">
                <div className="blog-list-post-thumb">
                  <Link to="/blog-details"><img src="assets/img/blog/t_blog_thumb01.jpg" alt="" /></Link>
                </div>
                <div className="blog-list-post-content">
                  <div className="blog-list-post-tag mb-25">
                    <a href="/#">shooting</a>
                  </div>
                  <h2><a href="/#">welcome PLAY FOR EVERYONE zombie</a></h2>
                  <div className="blog-meta">
                    <ul>
                      <li>bY <a href="/#">x-hunter</a> OCTOBER 19, 2022</li>
                    </ul>
                  </div>
                  <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvi condimentum dictum, sapien nibh auctor
                    tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus
                    vitae tellus lacinia pretium.</p>
                </div>
                <div className="blog-list-post-bottom">
                  <ul>
                    <li><a href="/#">more reding<i className="fas fa-angle-double-right" /></a></li>
                    <li>
                      <span>SHARE :</span>
                      <div className="blog-post-share">
                        <a href="/#"><i className="fab fa-facebook-f" /></a>
                        <a href="/#"><i className="fab fa-twitter" /></a>
                        <a href="/#"><i className="fab fa-pinterest-p" /></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-list-post">
                <div className="blog-list-post-thumb">
                  <Link to="/blog-details"><img src="assets/img/blog/t_blog_thumb02.jpg" alt="" /></Link>
                </div>
                <div className="blog-list-post-content">
                  <div className="blog-list-post-tag mb-25">
                    <a href="/#">shooting</a>
                  </div>
                  <h2><a href="/#">welcome PLAY FOR EVERYONE zombie</a></h2>
                  <div className="blog-meta">
                    <ul>
                      <li>bY <a href="/#">x-hunter</a> OCTOBER 19, 2022</li>
                    </ul>
                  </div>
                  <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvi condimentum dictum, sapien nibh auctor
                    tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus
                    vitae tellus lacinia pretium.</p>
                </div>
                <div className="blog-list-post-bottom">
                  <ul>
                    <li><a href="/#">more reding<i className="fas fa-angle-double-right" /></a></li>
                    <li>
                      <span>SHARE :</span>
                      <div className="blog-post-share">
                        <a href="/#"><i className="fab fa-facebook-f" /></a>
                        <a href="/#"><i className="fab fa-twitter" /></a>
                        <a href="/#"><i className="fab fa-pinterest-p" /></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-list-post">
                <div className="blog-list-post-thumb">
                  <Link to="/blog-details"><img src="assets/img/blog/t_blog_thumb03.jpg" alt="" /></Link>
                </div>
                <div className="blog-list-post-content">
                  <div className="blog-list-post-tag mb-25">
                    <a href="/#">shooting</a>
                  </div>
                  <h2><a href="/#">welcome PLAY FOR EVERYONE zombie</a></h2>
                  <div className="blog-meta">
                    <ul>
                      <li>bY <a href="/#">x-hunter</a> OCTOBER 19, 2022</li>
                    </ul>
                  </div>
                  <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvi condimentum dictum, sapien nibh auctor
                    tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus
                    vitae tellus lacinia pretium.</p>
                </div>
                <div className="blog-list-post-bottom">
                  <ul>
                    <li><a href="/#">more reding<i className="fas fa-angle-double-right" /></a></li>
                    <li>
                      <span>SHARE :</span>
                      <div className="blog-post-share">
                        <a href="/#"><i className="fab fa-facebook-f" /></a>
                        <a href="/#"><i className="fab fa-twitter" /></a>
                        <a href="/#"><i className="fab fa-pinterest-p" /></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pagination-wrap mt-60">
                <ul>
                  <li><a href="/#">first</a></li>
                  <li><a href="/#">1</a></li>
                  <li><a href="/#">2</a></li>
                  <li><a href="/#">next</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="blog-sidebar">
                <div className="widget mb-45">
                  <div className="sidebar-about">
                    <div className="sidebar-about-thumb">
                      <img src="assets/img/blog/sidebar_about_thumb.jpg" alt="" />
                    </div>
                    <div className="sidebar-widget-title mb-15">
                      <h4>ABOUT THE <span>AUTHOR</span></h4>
                    </div>
                    <div className="sidebar-about-content">
                      <p>Donec orci enim, bibendum a augue quis, aliquet cursus quamPellentesq.</p>
                    </div>
                  </div>
                </div>
                <div className="widget mb-45">
                  <div className="sidebar-search">
                    <form action="/#">
                      <input type="text" placeholder="Type and hit enter..." />
                      <button><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="widget mb-45">
                  <div className="sidebar-widget-title mb-25">
                    <h4>category <span>post</span></h4>
                  </div>
                  <div className="sidebar-cat">
                    <ul>
                      <li><a href="/#">ESPORTS ( 12 )</a></li>
                      <li><a href="/#">play store ( 03 )</a></li>
                      <li><a href="/#">pubg ( 09 )</a></li>
                      <li><a href="/#">zombieland ( 07 )</a></li>
                      <li><a href="/#">shooting ( 02 )</a></li>
                    </ul>
                  </div>
                </div>
                <div className="widget mb-45">
                  <div className="sidebar-widget-title mb-25">
                    <h4>Recent <span>post</span></h4>
                  </div>
                  <div className="rc-post-list">
                    <ul>
                      <li>
                        <div className="rc-post-thumb">
                          <a href="/#"><img src="assets/img/blog/rc_post_thumb01.jpg" alt="" /></a>
                        </div>
                        <div className="rc-post-content">
                          <h5><a href="/#">EVERYONE zombie</a></h5>
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                      <li>
                        <div className="rc-post-thumb">
                          <a href="/#"><img src="assets/img/blog/rc_post_thumb02.jpg" alt="" /></a>
                        </div>
                        <div className="rc-post-content">
                          <h5><a href="/#">Archery World Tour</a></h5>
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                      <li>
                        <div className="rc-post-thumb">
                          <a href="/#"><img src="assets/img/blog/rc_post_thumb03.jpg" alt="" /></a>
                        </div>
                        <div className="rc-post-content">
                          <h5><a href="/#">The Ranger Magic</a></h5>
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget mb-45">
                  <div className="sidebar-widget-title mb-25">
                    <h4>TRENDING <span>MATCHES</span></h4>
                  </div>
                  <div className="sidebar-trending-match">
                    <ul>
                      <li>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb01.png" alt="" /></a>
                        </div>
                        <div className="sidebar-trend-match-action">
                          <span>0</span> <span>-</span> <span>3</span>
                        </div>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb02.png" alt="" /></a>
                        </div>
                        <div className="sidebar-trend-match-date">
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb03.png" alt="" /></a>
                        </div>
                        <div className="sidebar-trend-match-action">
                          <span>0</span> <span>-</span> <span>7</span>
                        </div>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb04.png" alt="" /></a>
                        </div>
                        <div className="sidebar-trend-match-date">
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb05.png" alt="" /></a>
                        </div>
                        <div className="sidebar-trend-match-action">
                          <span>0</span> <span>-</span> <span>3</span>
                        </div>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb06.png" alt="" /></a>
                        </div>
                        <div className="sidebar-trend-match-date">
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <div className="sidebar-widget-title mb-25">
                    <h4>TAGS <span>post</span></h4>
                  </div>
                  <div className="sidebar-tag-list">
                    <ul>
                      <li><a href="/#">pubg</a></li>
                      <li><a href="/#">dota 2</a></li>
                      <li><a href="/#">zombie</a></li>
                      <li><a href="/#">call of duty</a></li>
                      <li><a href="/#">development</a></li>
                      <li><a href="/#">zombieland 2</a></li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Blogarea