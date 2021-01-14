import React from 'react';
import {Animated} from "react-animated-css";

const Concept = () => {
    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className="about-concept">
                <h1 className="right-title">Prize</h1>
                <h3 className="left-title">For all of your effort building your amazing project, we prepare rewards for it.</h3>
            </div>
        </Animated>
    );
}

export default Concept;
