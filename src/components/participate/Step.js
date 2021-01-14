import React from 'react';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Step = () => {
    return (
        <div className="step">
            <Animated className="title-banner" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 className="banner-title">Follow the Step Below to Register</h1>
                <p>It is free and easy</p>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="clipboard" />{'  '}Click the Following Button to Register</h2>
                <a className="btn-reg" href="https://forms.gle/y2KSuENRGz5F4qhg9" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="arrow-right" /></a>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="envelope-open-text" />{'  '}Wait for us to email you back for the next step</h2>
            </Animated>
        </div>
    );
}

export default Step;
