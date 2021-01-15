/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import {Animated} from "react-animated-css";

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
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

// We export the component as default
export default Concept;
