import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GeneralNavbar = () => {

    return(
        <div>
            <Navbar>
                <Navbar.Brand>Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse className="justify-content-center">
                    <Nav>
                        <Nav.Link as={Link} to="/" >Marketplace</Nav.Link>
                        <Nav.Link as={Link} to="/property/p/house" >Property</Nav.Link>
                        <Nav.Link as={Link} to="/profiles" >Profile</Nav.Link>
                        <Nav.Link>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default GeneralNavbar;