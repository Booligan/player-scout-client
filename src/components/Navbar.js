import React from 'react';
import {Navbar as BNav, Nav, NavItem} from 'react-bootstrap';


const Navbar = () => {
    return(
        <BNav>
            <BNav.Header>
                <BNav.Brand>
                    <a href="#">PLAYER SCOUT</a>
                </BNav.Brand>
            </BNav.Header>
            <Nav>
                <NavItem href= "#">
                    <a href="#">ABOUT</a>
                </NavItem>
                <NavItem href= "#">
                    <a href="#">PLAYERS</a>
                </NavItem>
            </Nav>  
        </BNav>          
    )
}

export default Navbar;
