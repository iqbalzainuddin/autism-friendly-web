import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

const Pagenav = (props) => {
    return (
        <Animated className="page-nav w-100" animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
            <div className="b-nav-comp">
                <p className="mb-20">{props.previous.name}</p>
                <Link to={props.previous.url} className="btn-pg-nav"><FontAwesomeIcon icon="chevron-circle-left" />{' '}Go to Previous Page</Link>
            </div>
            <div className="b-nav-comp">
                <p className="mb-20">{props.next.name}</p>
                <Link to={props.next.url} className="btn-pg-nav">Go to Next Page{' '}<FontAwesomeIcon icon="chevron-circle-right" /></Link>
            </div>
        </Animated>
    );
}

export default Pagenav;
