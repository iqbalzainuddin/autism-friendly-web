import React from 'react';
import {Consumer} from '../../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Consumer>
            {value => {
                const {menus} = value;
                return (
                    <nav className="navbar">
                        <ul className="nav-list-group">
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

export default Navbar;