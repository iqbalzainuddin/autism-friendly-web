/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import iot from '../../img/logotp.png';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Left = () => {
    return (
        <div className="start-left">
            <img className="start-logo" alt="IoT Logo" src={iot} />
        </div>
    );
}

// We export the component as default
export default Left;
