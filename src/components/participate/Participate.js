/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import Concept from './Concept';
import Step from './Step';
import Pagenav from '../pagenav/Pagenav';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
function Participate(props) {
    return (
        <div className="participate-content">
            <Concept />
            <Step />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

/* 
    Here we define the default props for this components, so that it could be
    passed to Pagenav components that use it to determine the previous and next page
*/
Participate.defaultProps = {
    previous: {
        url: "../terms/conditions",
        name: "Terms & Conditions"
    },
    next: {
        url: "../submit/how",
        name: "How to Submit"
    }
}

// We export the component as default
export default Participate;;
