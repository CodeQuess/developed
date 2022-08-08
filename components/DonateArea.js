import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class DonateArea extends Component {
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
                <div className="section-divider"></div>
                <section className="donate-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="donate-item-img">
                                    <figure>
                                        <img src="/images/donate-img.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="donate-item-content">
                                    <div className="section-heading">
                                        <div className="section-icon">
                                            <img src="/images/section-icon.png" alt="section-icon" />
                                        </div>
                                        <h2 className="section__title">Pure Education for Children</h2>
                                        <p className="section__desc">
                                             It is our Obligation to right the wrongs and Provide Education
                                        for the children. Say NO to Deprivation of Education.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="donate-fun-wrap">
                                <div className="fun-content">
                                    <div className="fun-item fun-item1">
                                       
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 76012 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p className="fun__text">We keep growing</p>
                                    </div>
                                </div>
                                <div className="fun-content">
                                    <div className="fun-item fun-item2">
                                        <i className=" icon-cancer"></i>
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 6310 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p className="fun__text"> We are available to help you</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default DonateArea;