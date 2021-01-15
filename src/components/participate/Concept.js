/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import { Animated } from 'react-animated-css';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
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

// We export the component as default
export default Concept;
