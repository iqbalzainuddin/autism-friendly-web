/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import {Animated} from "react-animated-css";

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Category = () => {
    return (
        <div className="comp-category">
            <Animated className="title-banner" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <h1 className="banner-title">What Devices Could You Create?</h1>
                <p>Luckily, we have 3 different categories</p>
            </Animated>
            <div className="flex-container w-80 vh-70">
                <Animated className="flex-item col-4 vh-50 m-5 card" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="card-title">
                        <h2>Smart Home</h2>
                        <p>Control home devices using a smartphone or tablet remotely via an internet connection.</p>
                    </div>
                </Animated>
                <Animated className="flex-item col-4 vh-50 m-5 card" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="card-title">
                        <h2>Agriculture</h2>
                        <p>The use of sensors, cameras, and other devices to translate farming processes into data.</p>
                    </div>
                </Animated>
                <Animated className="flex-item col-4 vh-50 m-5 card" animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="card-title">
                        <h2>Health & fitness</h2>
                        <p>Smart wearable devices that can track, notify, and keep health information.</p>
                    </div>
                </Animated>
            </div>
        </div>
    );
}

// We export the component as default
export default Category;
