import React from 'react';

const BlogHome = () => {
    return (
        <section className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="section-heading blog-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Join Our Ministries</h2>
                            <p className="section__meta">News and Updates</p>
                        </div>
                    </div>
                </div>
                <div className="row recent-post-wrap">
                    <div className="col-lg-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date">09 mar, 2020</span>
                                <img src="/images/salv2.jpg" alt="service-image" width="500" height="600" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><a href="/single-news">The Way of Salvation
                                    </a></h3>
                                
                                <p className="news__content-text">
                                We believe that the scriptures teach that the salvation of sinners is wholly of grace; 
                                through the mediatorial offices of the Son of God; who by the appointment of the Father, 
                                freely took upon Him our nature, yet without sin; honored the divine law by His personal obedience,
                                and by His death made a full atonement for our sins; that having risen from the dead, 
                                He is now enthroned in heaven; 
                                and uniting in His wonderful person the tenderest sympathies with divine perfections,
                                 He is in every way qualified to be a suitable, a compassionate, 
                                 and an all sufficient Saviour (John 3:1-8, 33; Romans 6:2;
                                 Ephesians2:8-9; 
                                 Hebrews 9:24-25, 10:19, 12:24; 
                                 I Peter 1:18-19; Revelation 1:5).
                                </p>
                                <a href="single-news" className="theme-btn">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="third-recent-box">
                            <ul className="third-recent-item">
                                <li>
                                    <div className="recent__img">
                                        <a href="/single-news"><img src="/images/img61.jpg" alt="textimage" width="200" height="200" /></a>
                                    </div>
                                    <div className="recent__content">
                                       
                                        <h4><a href="single-news.html">Our Philosophy</a>
                                        </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img">
                                        <a href="/single-news"><img src="images/men1.jpg" alt="textimage" width="170" height="137" /></a>
                                    </div>
                                    <div className="recent__content">
                                        
                                        <h4><a href="/single-news">Our Ministries</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img">
                                        <a href="/single-news"><img src="/images/img63.jpg" alt="textimage" width="170" height="137" /></a>
                                    </div>
                                    <div className="recent__content">
                                       
                                        <h4><a href="single-news.html">
                                            Join Christ's Kingdom Today!</a></h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHome;
