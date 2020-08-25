import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";

import logo from '../img/book-store-logo.svg';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <div id="nav-bar" className="fixed-top shadow bg-white">
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-4" href="/">
          <img id="logo" src={logo} alt="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="mr-4" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-auto" onClick={toggle}>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem className="ml-auto" onClick={toggle}>
              <NavLink>
                <Link to="/products">Products</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu;