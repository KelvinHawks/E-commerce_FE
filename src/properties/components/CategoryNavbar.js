import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import '../styles/property.css'
import { useState } from "react";


const CategoryNavbar = ({category}) => {

        const [linkStyle, setLinkStyle] = useState({
            borderRadius: '0px',
            backgroundColor: 'rgb(223, 220, 220)',
            margin: '2%',
            padding: '1%',
            transition: 'background-color 0.03 ease',
            textDecoration: 'none',
            display: 'inline-block',
            
        });

    const handleHover = () => {
        setLinkStyle({
            ...linkStyle,
            backgroundColor: 'green',
        })

    };

    const handleHoverOut = () => {
        setLinkStyle({
            ...linkStyle,
            backgroundColor: 'rgb(223, 220, 220)',
        });
    };

    return (
        <div style={{ display:'inline' }} className=" d-flex justify-content-center ">
            <Navbar style={{ display:'inline' }} >
                <Nav style={{ display:'inline' }}>
                        <Nav.Link className="category-link" id="category-nav">
                            <Link to={`/property/p/${category.toLowerCase()}`}
                            style={linkStyle}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHoverOut}
                            >{category}</Link>
                        </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );

};

export default CategoryNavbar;