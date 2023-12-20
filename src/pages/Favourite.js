import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import jsonData from '../properties/sampleData/houses.json'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Favourite = () => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(12);

    const favouriteHouses = jsonData.filter((house) => house.isfavourite && house.isfavourite === true);

    console.log(favouriteHouses);

    return (
        <div style={{backgroundColor: 'antiquewhite'}}  >
            <div className="text-center background-antiqwhite" >
                <h3><b>Favourites</b></h3>
            </div>
        
            <Row  xs={1} md={2} lg={3}>
                {favouriteHouses.slice(start, end).map((house, index) => (
                    <Col key={index}>
                        <Link to={`/property/i/${house.id}`} className="category-link">
                            <Card id="card">
                                <Card.Img variant="top" src={house.imageUrl} style={{width: '316px', height: '180px'}} />

                                <Card.Text>
                                    <p id="card_price">&nbsp;&nbsp;<b>{house.price}</b></p>
                                    <h5>&nbsp;<b>{house.name}</b></h5>
                                    <p>&nbsp;<img src={`${process.env.PUBLIC_URL}/images/location_icon.png`} width="20px" height="20px" /></p>
                                    <p id="card-icons" > 
                                        &nbsp;<img src={`${process.env.PUBLIC_URL}/images/bed_icon.png`} width="20px" height="20px"/>| {house.bed} beds&nbsp;
                                        <img src={`${process.env.PUBLIC_URL}/images/bath_icon.png`} width="20px" height="20px" /> | {house.bath} baths&nbsp;  
                                        <img src={`${process.env.PUBLIC_URL}/images/car_icon.png`} width="20px" height="20px" /> | {house.parking} parking&nbsp; 
                                        <img src={`${process.env.PUBLIC_URL}/images/ruler_icon.png`} width="20px" height="20px" /> | {house.size}
                                    </p>

                                </Card.Text>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        
        </div>
    )
}

export default Favourite;