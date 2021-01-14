import React from 'react';
import Concept from './Concept';
import List from './List';
import Consolation from './Consolation';
import Pagenav from '../pagenav/Pagenav';

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

export default Prize;
