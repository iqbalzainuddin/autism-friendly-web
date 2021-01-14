import React from 'react';
import Concept from './Concept';
import Step from './Step';
import Pagenav from '../pagenav/Pagenav';

function Participate(props) {
    return (
        <div className="participate-content">
            <Concept />
            <Step />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

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

export default Participate;;
