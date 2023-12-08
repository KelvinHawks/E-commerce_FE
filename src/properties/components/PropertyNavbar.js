import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../styles/property.css'
import { Navbar, Nav, Button } from 'react-bootstrap';

const PropertyNavbar = () => {
    return (
        <div className="text-center property-nav" >
            <Navbar bg="antiquewhite" expand="lg" className="mx-auto">
                <Navbar.Brand style={{marginLeft: '15px'}} >Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link as={Link} to="/property/house">Home</Nav.Link>
                        <Nav.Link href="#">Favourite</Nav.Link>
                        <Nav.Link href="#">Notifications</Nav.Link>
                        <Nav.Link href="#">Settings</Nav.Link>
                        <Nav.Link as={Link} to="/property/UPLOAD" style={{marginLeft: '10px', marginRight: '0px'}} ><Button><b>Sell/Rent</b></Button></Nav.Link>
                        <Nav.Link href="#"><Button><b>Contact Us</b></Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default PropertyNavbar;