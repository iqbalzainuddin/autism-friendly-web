/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import Concept from './Concept';
import Method from './Method';
import Pagenav from '../pagenav/Pagenav';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
function Evaluation(props) {
    return (
        <div className="evaluation-content">
            <Concept />
            <Method />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

/* 
    Here we define the default props for this components, so that it could be
    passed to Pagenav components that use it to determine the previous and next page
*/
Evaluation.defaultProps = {
    previous: {
        url: "../submit/how",
        name: "How to Submit"
    },
    next: {
        url: "../prize",
        name: "Prize"
    }
}

// We export the component as default
export default Evaluation;
