import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

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

export default Right;
