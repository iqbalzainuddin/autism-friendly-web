import React from 'react';
import Left from './Left';
import Right from './Right';
import {Animated} from "react-animated-css";

const Start = () => {
    return (
        <Animated className="start-content" animationIn="pulse" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
            <Left />
            <Right />
        </Animated>
    );
}

export default Start;
