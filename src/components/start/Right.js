/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Right = () => {
    return (
        <div className="start-right">
            <div>
                <h1 className="title shadow">IoT Innovation Challenge 2021</h1>
                <h2>Welcome! What is IoT Innovation Challenge?</h2>
                <br/>
                <p>We will guide you through our website, then you will find out what it is.</p>
            </div>
            <Link to="/competition/about" className="btn">Click Here to Start{' '}<FontAwesomeIcon icon="chevron-circle-right" /></Link>
        </div>
    );
}

// We export the component as default
export default Right;
