import React from 'react';
import { Animated } from 'react-animated-css';

const Concept = () => {
    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className="term-concept">
                <h1 className="right-title">How to Participate</h1>
                <h3 className="left-title">Follow the steps we stated below to register for participation into this challenge. How about Fee? Don't worry, it is FREE!</h3>
            </div>
        </Animated>
    );
}

export default Concept;
