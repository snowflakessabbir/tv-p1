import React from 'react';
import "./Subscribe.css"

const Subscribe = () => {
    return (
        <div className="subscribe-area mx-auto d-flex flex-column justify-content-center align-items-center my-5">
            <h2 className="subscribe-header-a ">Sign Up for our Newsletter</h2>
            <div className="sub-now d-flex my-4">
                <input placeholder="Enter your Email" className="flex-grow-1 email-input px-5" type="email" />
                <input className="submit-input px-4" type="submit" value="Submit" />
            </div>
            <h4 className="subscribe-header-b">Our Subscribers get <span className="coupon">20 Coupons</span></h4>
        </div>
    );
};

export default Subscribe;