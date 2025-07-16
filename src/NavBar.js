import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavBar() {

  return (
    <>
      <Navbar fixed="top" className='NavBar'>
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className="NavBarBrand">Coffee Census</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-left">
            </Nav>

            <Nav className="ms-auto">
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;