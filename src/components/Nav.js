import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Homepage</li>
                </NavLink>
                <NavLink to="/ayakor">
                    <li>About Me</li>
                </NavLink>
                <NavLink to="/projects">
                    <li>My Projects</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Nav;