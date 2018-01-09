import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar as BNav, Nav, NavItem} from 'react-bootstrap';


const Navbar = () => {
    return(
        <BNav>
            <BNav.Header>
                <BNav.Brand>
                    <NavLink to="/" exact >PLAYER SCOUT</NavLink>
                </BNav.Brand>
            </BNav.Header>
            <Nav>
                <NavItem href= "#">
                    <NavLink to="/" exact >ABOUT</NavLink>                    
                </NavItem>
                <NavItem href= "#">
                    <NavLink to="/" exact >PLAYERS</NavLink>
                </NavItem>
            </Nav>  
        </BNav>          
    )
}

export default Navbar;
