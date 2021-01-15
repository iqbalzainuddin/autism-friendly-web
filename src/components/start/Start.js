/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import Left from './Left';
import Right from './Right';
import {Animated} from "react-animated-css";

/* 
    This is a functional component that return JSX component to where it will be called to use.
    This is a superclass for Start Here page where it will import other sub-components to be used,
    which are Left and Right wrapped in the Animated component below
*/
const Start = () => {
    return (
        <Animated className="start-content" animationIn="pulse" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
            <Left />
            <Right />
        </Animated>
    );
}

// We export the component as default
export default Start;
