import React from 'react';
import Concept from './Concept';
import Category from './Category';
import Pagenav from '../pagenav/Pagenav';

const About = (props) => {
    return (
        <div className="about-content">
            <Concept />
            <Category />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

About.defaultProps = {
    previous: {
        url: "/",
        name: "Start Here"
    },
    next: {
        url: "../terms/conditions",
        name: "Terms & Conditions"
    }
}

export default About;
