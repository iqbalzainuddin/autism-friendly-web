/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import Concept from './Concept';
import List from './List';
import Pagenav from '../pagenav/Pagenav';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Term = (props) => {
    return (
        <div className="term-content">
            <Concept />
            <List />
            <Pagenav previous={props.previous} next={props.next} />
        </div>    
    )
}

/* 
    Here we define the default props for this components, so that it could be
    passed to Pagenav components that use it to determine the previous and next page
*/
Term.defaultProps = {
    previous: {
        url: "../competition/about",
        name: "About Competition"
    },
    next: {
        url: "../participate/how",
        name: "How to Participate"
    }
}

// We export the component as default
export default Term;
