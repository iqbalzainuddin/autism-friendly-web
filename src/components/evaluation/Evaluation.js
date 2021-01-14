import React from 'react';
import Concept from './Concept';
import Method from './Method';
import Pagenav from '../pagenav/Pagenav';

function Evaluation(props) {
    return (
        <div className="evaluation-content">
            <Concept />
            <Method />
            <Pagenav previous={props.previous} next={props.next} />
        </div>
    );
}

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

export default Evaluation;
