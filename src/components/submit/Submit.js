/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import Requirement from './Requirement';
import List from './List';
import Content from './Content';
import Pagenav from '../pagenav/Pagenav';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Submit = (props) => {
    return (
        <div className="submit-content">
            <Requirement />
            <List />
            <Content />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

/* 
    Here we define the default props for this components, so that it could be
    passed to Pagenav components that use it to determine the previous and next page
*/
Submit.defaultProps = {
    previous: {
        url: "../participate/how",
        name: "How to Participate"
    },
    next: {
        url: "../evaluation/method",
        name: "Evaluation Method"
    }
}

// We export the component as default
export default Submit;
