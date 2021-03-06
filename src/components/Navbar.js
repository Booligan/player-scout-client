import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar as BNav, Nav, NavItem} from 'react-bootstrap';


const Navbar = () => {
    return(
        <BNav>
            <BNav.Header>
                <BNav.Brand>
                    <Link to="/" exact >PLAYER SCOUT</Link>
                </BNav.Brand>
            </BNav.Header>
            <Nav>
                <NavItem>
                    <Link to="/about" exact >ABOUT</Link>                    
                </NavItem>
                <NavItem>
                    <Link to="/players" exact >PLAYERS</Link>
                </NavItem>
            </Nav>  
        </BNav>          
    )
}

export default Navbar;
