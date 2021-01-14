import React from 'react';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Content() {
    return (
        <div className="submit-req">
            <Animated className="title-banner" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 className="banner-title">What Your Video Should Have?</h1>
                <p>Let's check it out</p>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="bullseye" />{'  '}Target user (who will get benefits of the innovation)</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="clipboard-list" />{'  '}Clearly stated the problem statement</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="road" />{'  '}The objectives of the innovation</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="laptop-code" />{'  '}Demonstration of a complete project</h2>
            </Animated>
        </div>
    );
}

export default Content;
