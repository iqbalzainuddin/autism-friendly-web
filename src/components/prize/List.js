/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const List = () => {
    return (
        <div className="comp-category">
            <Animated className="title-banner" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 className="banner-title">Reward List</h1>
                <p>We have Cash Reward for Best of 3</p>
            </Animated>
            <div className="flex-container w-80 vh-70">
                <Animated className="flex-item col-4 vh-50 m-5 card" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="card-title text-center">
                        <FontAwesomeIcon className="" icon="trophy"/>
                        <h2>Champion</h2>
                        <p>Certificate + RM500</p>
                    </div>
                </Animated>
                <Animated className="flex-item col-4 vh-50 m-5 card" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="card-title text-center">
                        <FontAwesomeIcon className="" icon="medal"/>
                        <h2>1st Runner-Up</h2>
                        <p>Certificate + RM300</p>
                    </div>
                </Animated>
                <Animated className="flex-item col-4 vh-50 m-5 card" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="card-title text-center">
                        <FontAwesomeIcon className="" icon="award"/>
                        <h2>2nd Runner-Up</h2>
                        <p>Certificate + RM100</p>
                    </div>
                </Animated>
            </div>
        </div>
    )
}

// We export the component as default
export default List
