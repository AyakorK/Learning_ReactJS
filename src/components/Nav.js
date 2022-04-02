import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "activePage": "")}>
                    <li>Homepage</li>
                </NavLink>
                <NavLink to="/ayakor"  className={(nav) => (nav.isActive ? "activePage": "")}>
                    <li>About Me</li>
                </NavLink>
                <NavLink to="/projects"  className={(nav) => (nav.isActive ? "activePage": "")} >
                    <li>My Projects</li>
                </NavLink>
            </ul>
        </nav>
        
    );
};

export default Nav;