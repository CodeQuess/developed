import React from 'react';

const HiwArea = () => {
    return (
        <section className="hiw-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg1">
                                <figure>
                                    <img src="/images/salv1.jpg" alt="textimage" width="380" height="380" />
                                        <h3 className="hiw-title">Lydia Week</h3>
                                        <div className="hiw-btn-box">
                                            <a href="#" className="theme-btn">Save the date</a>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg2">
                                <figure>
                                    <img src="/images/dance1.jpg" alt="textimage" width="380" height="380"/>
                                        <h3 className="hiw-title">Afro Sundays</h3>
                                        <div className="hiw-btn-box">
                                            
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="hiw-item">
                            <div className="hiw-item-img-box hiw-bg3">
                                <figure>
                                    <img src="/images/people1.jpg" alt="textimage" width="380" height="380" />
                                        <h3 className="hiw-title">Youths</h3>
                                        <div className="hiw-btn-box">
                                            <a href="#" className="theme-btn">Engage Us</a>
                                        </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiwArea;
