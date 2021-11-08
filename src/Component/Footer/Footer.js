import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"



const Footer = () => {
    const logo = "https://i.ibb.co/K946LBb/logo.png";
    const apple = "https://i.ibb.co/LpJL1BF/apply.png";
    const play = "https://i.ibb.co/VWFQXf9/play.png";
    const call = "https://i.ibb.co/FwvtbJM/call.png";
    const insta = "https://i.ibb.co/2FGKZYR/insta.png"
    return (
        <div className="footer-area">
            <div className="container footer">
                
                <div className="footer-dev-1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <p className="div-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget molestie eleifend sed viverra.</p>
                    <Link to="#">
                        <div className="d-flex apple justify-content-center align-items-center my-3">
                            <div>
                                <img className="w-full py-2" src={apple} alt="" />
                            </div>
                            <div>
                                <h6>Available on the</h6>
                                <h4 className="font-weight-bold">App Store</h4>
                            </div>
                        </div>
                    </Link>

                    <Link to="#">
                        <div className="d-flex play justify-content-center align-items-center my-3">
                            <div>
                                <img className="w-full py-2" src={play} alt="" />
                            </div>
                            <div>
                                <h6>Get IN ON</h6>
                                <h4 className="font-weight-bold">Google Play</h4>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="footer-dev-2 pt-5 ">
                    <h3 className="quick-link font-weight-bold">Quick Links</h3>
                    <Link to="#"><h6>About Us</h6></Link>
                    <Link to="#"><h6>About Us</h6></Link>
                    <Link to="#"><h6>About Us</h6></Link>
                    <Link to="#"><h6>About Us</h6></Link>
                    <Link to="#"><h6>About Us</h6></Link>

                </div>

                <div className="footer-dev-3 pt-5">
                    <h3 className="quick-contact">Quick Contacts</h3>
                    <div className="d-flex align-items-center mt-4">
                        <div >
                            <img className="w-full" src={call} alt="" />
                        </div>
                        <div className="mx-3">
                            <p>Have an Issue? You can contact us 24/7</p>
                            <h6>+91 5989282989</h6>
                        </div>
                    </div>
                    <div className="address mt-2">
                        <h5 className="address-h">Address</h5>
                        <p><span>shop 51 , nagar</span> <br />
                        <span>New Market , Sikkim -7868768</span></p>
                    </div>
                    <div className="social-link d-flex align-items-center justify-content-between w-50">
                        <Link to="#"><img src={insta} alt="" /></Link>
                        <Link to="#"><img src={insta} alt="" /></Link>
                        <Link to="#"><img src={insta} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;