import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/">
          <h1 className="logo">Bookstore</h1>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">
            <div className="">Home</div>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/cart">
            <div>Cart</div>
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
