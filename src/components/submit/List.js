import React from 'react';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = () => {
    return (
        <div className="submit-req">
            <Animated className="title-banner" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 className="banner-title">Follow the Video/Picture Format Below</h1>
                <p>Video that did not meet required format, mark will be deducted</p>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="video" />{'  '}Video file type must be MP4 (.mp4) / picture, PNG (.png) or JPEG (.jpg)</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="stopwatch" />{'  '}Duration: minimum (5mins) & maximum (10mins)</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="film" />{'  '}Quality: minimum of 480p and above</h2>
            </Animated>

            <Animated className="step-list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="headphones" />{'  '}Language: English / Bahasa</h2>
            </Animated>
        </div>
    );
}

export default List;
