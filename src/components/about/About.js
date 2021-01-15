/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import Concept from './Concept';
import Category from './Category';
import Pagenav from '../pagenav/Pagenav';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const About = (props) => {
    return (
        <div className="about-content">
            <Concept />
            <Category />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

/* 
    Here we define the default props for this components, so that it could be
    passed to Pagenav components that use it to determine the previous and next page
*/
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

// We export the component as default
export default About;
