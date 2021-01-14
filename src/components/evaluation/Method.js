import React from 'react';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Method() {
    return (
        <div className="method">
            <Animated className="title-banner" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 className="banner-title">Below is how we evaluate your project</h1>
                <p>We keep it simple and open.</p>
            </Animated>

            <Animated className="method-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="brain" />{'  '}Intelligence and sensing</h2>
            </Animated>

            <Animated className="method-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="puzzle-piece" />{'  '}Has the capacity to problem-solve</h2>
            </Animated>

            <Animated className="method-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="network-wired" />{'  '}Perform various functions without constant human guidance</h2>
            </Animated>

            <Animated className="method-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="user-cog" />{'  '}Perhaps to emulate human responses to various stimuli</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="stopwatch" />{'  '}Duration are not too long but full of contents</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="user-graduate" />{'  '}Creative presentation</h2>
            </Animated>
        </div>
    );
}

export default Method;
