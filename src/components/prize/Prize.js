/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import Concept from './Concept';
import List from './List';
import Consolation from './Consolation';
import Pagenav from '../pagenav/Pagenav';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Prize = (props) => {
    return (
        <div className="prize-content">
            <Concept />
            <List />
            <Consolation />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

/* 
    Here we define the default props for this components, so that it could be
    passed to Pagenav components that use it to determine the previous and next page
*/
Prize.defaultProps = {
    previous: {
        url: "../evaluation/method",
        name: "Evaluation Method"
    },
    next: {
        url: "/contact",
        name: "Contact Us"
    }
}

// We export the component as default
export default Prize;
