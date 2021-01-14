import React from 'react';
import Requirement from './Requirement';
import List from './List';
import Content from './Content';
import Pagenav from '../pagenav/Pagenav';

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

export default Submit;
