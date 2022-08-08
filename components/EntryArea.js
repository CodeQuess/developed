import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

class EntryArea extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    handleModal = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <section className="entry-area">
                <div className="container">
                    <div className="row entry-static-wrap">
                        <div className="col-lg-3">
                            <div className="entry-static-box entry-static-box1">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon"/>
                                </div>
                                <h2 className="entry__title">God bless you and thank you for choosing &nbsp;&nbsp; Cornerstone Baptist Church Gwarinpa.
                                 
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="entry-img">
                                            <img src="/images/event8.jpg" alt="entry-img" width="300" height="300" />
                                            
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="entry-text">
                                            <h2 className="entry__title">  We Welcome You
                                                </h2>
                                            <p className="entry__text">As Senior Pastor, I extend my hand and heart in fellowship to you and offer my service to you. 
                                            I pray that you will take advantage of the opportunities for worship, growth, 
                                            and service that are available to you as members of Cornerstone Baptist Church, Gwarinpa.
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

export default EntryArea;