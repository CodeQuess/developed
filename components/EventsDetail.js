import React from 'react';
import Map from "./Map";

const EventsDetail = () => {
    return (
        <section className="event-detail-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/img19.jpg" alt="" />
                            <span className="blog__tag">
                                <span className="date__num-text">9</span>
                                <span className="date__mon-text">mar</span>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="event-detail-content">
                            <div className="event-detail-item">
                                <h3 className="event__title">Play for the world</h3>
                                <p className="event__text">
                                   Let Us give back together we will make a difference.
                                </p>
                                <p className="event__text">
                                 The World can Get Better
                                </p>
                            </div>
                            <div className="event-detail-item">
                                <h3 className="event__title event__title2">Event Requirements</h3>
                                <p className="event__text">

                                    Every year We have Charity Auctions with the sole purpose of Changing lives .
                                </p>
                            </div>
                            <div className="event-detail-btn">
                                <a href="#" className="theme-btn">Register now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="event-detail-sidebar">
                            <div className="event-detail-item">
                                <h3 className="event__title">Event Details</h3>
                                <ul className="event__list">
                                    <li><span>Starting Time:</span> 8:00AM to 2:00PM</li>
                                    <li><span>Date:</span>9 March, 2019</li>
                                    <li><span>Category:</span>Health</li>
                                    <li><span>Phone:</span>666 888 0000</li>
                                    <li><span>Website:</span>Info@event.com</li>
                                    <li><span>Location:</span>8 Street, San Marcos London D29, UK</li>
                                </ul>
                            </div>
                            <div className="event-detail-item event-detail-item2">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsDetail;
