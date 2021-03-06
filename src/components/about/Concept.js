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
                <h1 className="right-title">About Competition</h1>
                <h3 className="left-title">IoT Innovation Challenge held by us to allow you create a smart IoT device to solve a problem and automate the solution.<br/><br/>IMPORTANT DATE!<br/>Register: 10-20 January 2021<br/>Submission: 15 Jan - 15 Feb 2021<br/>Winner Announcement: 17 Feb 2021</h3>
            </div>
        </Animated>
    );
}

// We export the component as default
export default Concept;
