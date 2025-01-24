import React from 'react'

function Navbar() {
    return (
        <>
            <div className="header_area " id="header_contents">
                <div className="top_bar style_one">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="top_inner">
                                    <div className="left_side common_css">
                                        <div className="contntent address">
                                            <i className="icon-placeholder"></i>
                                            <div className="text">
                                                <small>Location</small>
                                                <span>61W Business Str Hobert, LA </span>
                                            </div>
                                        </div>
                                        <div className="contntent email">
                                            <i className="icon-email"></i>
                                            <div className="text">
                                                <small>Email</small>
                                                <a href="mailto:sendmail@creote.com">sendmail@creote.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right_side common_css">
                                        <div className="contntent phone">
                                            <i className="icon-phone-call"></i>
                                            <div className="text">
                                                <small>Phone</small>
                                                <a href="tel:+9806071234">+9806071234</a>
                                            </div>
                                        </div>
                                        <div className="contntent media">
                                            <i className="icon-share"></i>
                                            <div className="text">
                                                <small>Share</small>
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-skype"></i>
                                                </a>
                                                <a href="#" target="_blank" rel="nofollow">
                                                    <i className="fa fa-telegram"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar
