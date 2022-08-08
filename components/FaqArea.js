import React, {Component} from 'react';

class FaqArea extends Component {

    componentDidMount() {
        new Accordion('.accordion-container');
    }



    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Have any Questions?</h2>
                                <p className="section__meta">frequently asked questions</p>
                            </div>
                            <div className="faq-img-box">
                                <img src="/images/ask1.jpg" alt="textimage" width="530" height="278" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Free Membership with Christ</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc"> We are Sons and Daughters of a Glorious God.
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Learn More About Our Ministries</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">  Honour and Integrity.
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Become an E-member</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc"> Drop Us a message
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqArea;