import React from 'react';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = () => {
    return (
        <div className="list-container">
            <Animated className="title-banner" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 className="banner-title">What are our Terms and Conditions?</h1>
                <p>They are absolutely easy to follow.</p>
            </Animated>
            <Animated className="list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="child" />{'  '}This challenge is open to everyone</h2>
            </Animated>
            <Animated className="list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="times" />{'  '}Any false information, the 
entry will be disqualified automatically</h2>
            </Animated>
            <Animated className="list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="users" />{'  '}The competition can be joined by yourself or a group of 5</h2>
            </Animated>
            <Animated className="list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="exclamation-triangle" />{'  '}Participants can enter one(1) category listed ONLY</h2>
            </Animated>
            <Animated className="list" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h2 className="banner-title"><FontAwesomeIcon className="mr-20" icon="stamp" />{'  '}The decision of the organizer in all matters of this competition is final</h2>
            </Animated>
        </div>
    );
}

export default List;
