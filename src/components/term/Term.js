import React from 'react';
import Concept from './Concept';
import List from './List';
import Pagenav from '../pagenav/Pagenav';

const Term = (props) => {
    return (
        <div className="term-content">
            <Concept />
            <List />
            <Pagenav previous={props.previous} next={props.next} />
        </div>    
    )
}

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

export default Term;
