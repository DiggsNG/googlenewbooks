import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap';
import Header from "./Components/Nav";

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            BookFinder
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;