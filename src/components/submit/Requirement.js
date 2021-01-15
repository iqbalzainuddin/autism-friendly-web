/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Requirement = () => {
    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className="term-concept">
                <h1 className="right-title">How to Submit</h1>
                <div className="left-title flex-space-around">
                    <h3>Presentation of your project must be submitted in a link consists of video and pictures. Make sure to check if your submission format meet our requirement.</h3>
                    <a href="https://forms.gle/aYFTaC4qmhAAk9o69" className="btn" target="_blank" rel="noreferrer">Click Here to Submit{' '}<FontAwesomeIcon icon="cloud-upload-alt" /></a>
                </div>
            </div>
        </Animated>
    );
}

// We export the component as default
export default Requirement;
