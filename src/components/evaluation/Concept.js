import React from 'react';
import { Animated } from 'react-animated-css';

function Concept() {
    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className="term-concept">
                <h1 className="right-title">Evaluation Method</h1>
                <h3 className="left-title">Maybe you also want to know how we evaluate and judge your project. This maybe help.</h3>
            </div>
        </Animated>
    );
}

export default Concept;
