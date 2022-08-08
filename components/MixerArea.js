import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class MixerArea extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }


    render() {
        return (
            <div>
                <section className="mixer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-heading mixer-heading">
                                    <div className="section-icon">
                                        <img src="/images/section-icon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title text__white">Heaven Rejoices Over You
                                        </h2>
                                    <a href="/donate" className="theme-btn">Start Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mixer-area2">
                    <div className="container">
                        <div className="row fun-content-wrap">
                            <div className="col-lg-6">
                                <div className="fun-content">
                                    <div className="fun-item fun-item1">
                                    <i className="icon-family"></i>
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 785000 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p className="fun__text">We keep Growing</p>
                                    </div>
                                </div>
                                <div className="fun-content">
                                    <div className="fun-item fun-item2">
                                        <i className="icon-cancer"></i>
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 63000 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p className="fun__text">We are available to help you</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="fun-content-slide">

                                    <Swiper>

                                        <div className="fun-slide-item">
                                            <div className="icon-quote">“</div>
                                            <h3 className="funslide__text">
                                            The Christian Life
1 Peter 1:13-16 Therefore, with minds that are alert and fully sober, 
set your hope on the grace to be brought to you when Jesus Christ revealed at this coming. 
                                            </h3>
                                            <p className="funslide__name">-Apostle Peter</p>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MixerArea;