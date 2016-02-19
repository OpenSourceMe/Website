import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Title from './Title';

const NavWrapper = (props) => {
  return (
    <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/home">
              <a href='#'>Home</a>
            </LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle="tabs">
            <LinkContainer to="/about">
              <NavItem href="#">About</NavItem>
            </LinkContainer>
            <LinkContainer to="/orders">
              <NavItem href="#">Orders</NavItem>
            </LinkContainer>
            <LinkContainer to="/settings">
              <NavItem href="#">Settings</NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>

    {props.children}
    </div>
  );
};

export default NavWrapper;