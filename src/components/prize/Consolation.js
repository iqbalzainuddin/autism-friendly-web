/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import {Animated} from "react-animated-css";
import Certificate from '../../img/certificate.png';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
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

// We export the component as default
export default Consolation;
