/* 
  The import statements import all required library in order for
  the component to work properly
*/
import React from 'react';
import {Consumer} from '../../context';
import { Link } from 'react-router-dom';

/* 
    This is a functional component that return JSX component to where it will be called to use.
*/
const Navbar = () => {
    return (
        <Consumer>
            {value => {
                // We destructured the menus from the state of context API to use it as a simpler variable
                const {menus} = value;
                return (
                    <nav className="navbar">
                        <ul className="nav-list-group">
                            {/* We are using map function to iterate through each data in the array and render output according to the data consumed */}
                            {menus.map((menu) => 
                                (<li className="nav-list-group-item"><Link to={menu.url}>{menu.title}</Link></li>)
                            )}
                        </ul>
                    </nav>
                )
            }}
        </Consumer>
    );
}

// We export the component as default
export default Navbar;