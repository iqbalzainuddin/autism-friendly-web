/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import { Animated } from 'react-animated-css';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
function Concept() {
    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className="term-concept">
                <h1 className="right-title">Terms & Conditions</h1>
                <h3 className="left-title">If you want to participate in this challenge, you need to follow our Terms & Conditions.</h3>
            </div>
        </Animated>
    )
}

// We export the component as default
export default Concept;
