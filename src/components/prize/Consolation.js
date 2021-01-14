import React from 'react';
import {Animated} from "react-animated-css";
import Certificate from '../../img/certificate.png';

const Consolation = () => {
    return (
        <div className="consol-container">
            <Animated className="right-title">
                <img src={Certificate} alt="certificate" />
            </Animated>
            <Animated className="left-title">
                <h2>And we prepare certificates for all participant.</h2>
            </Animated>
        </div>
    )
}

export default Consolation;
