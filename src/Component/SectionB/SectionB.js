import React from 'react';
import "./SectionB.css"

const SectionB = () => {
    const imgs = "https://i.ibb.co/KbDYGwh/images-2.png";
    return (
        <div className="section-b container d-flex justify-content-between">
            <div className="half-width">
                <img src={imgs} alt="" />
            </div>
            <div className="half-width"> 
                <img src={imgs} alt="" />
            </div>
        </div>
    );
};

export default SectionB;