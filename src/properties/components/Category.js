import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import '../styles/property.css'
import { DataContext } from "./PropertyManager";
import jsonData from '../sampleData/houses.json'
import { type } from "@testing-library/user-event/dist/type";

const Category = () => {

    const  filteredProperties   = useContext(DataContext);

    const filteredPropertiesArray = Object.values(filteredProperties);
   
    //extract category from url
    const { category } = useParams();
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(12);
    const [filteredHouses, setFilteredHouses] = useState([]);
    
    var categoryName = category || "house";
    //filter houses based on category name
    

    //TEST
    

    useEffect(() => {
        if (filteredPropertiesArray.length === jsonData.length){
            const totalFilteredHouses = jsonData.filter((item) => item.category === categoryName);
            if (JSON.stringify(totalFilteredHouses) !== JSON.stringify(filteredHouses)) {
                setFilteredHouses(totalFilteredHouses)
            };
            
        } else {
            if (JSON.stringify(filteredPropertiesArray) !== JSON.stringify(filteredHouses)) {
                setFilteredHouses(filteredPropertiesArray)
            };
        }
        console.log(filteredPropertiesArray.length === jsonData.length)
    }, [category, categoryName, filteredPropertiesArray]);



    const totalHouses = filteredHouses.length;

    useEffect(() => {
        setStart(0);
        setEnd(12);
    }, [category]);

    if (totalHouses === 0) {
        return(
            <div>
                <h5>No houses found</h5>
            </div>
        )
    };

    const loadMore = () => {
        if (end <= totalHouses){
            //adjust variables when the button is clicked
            setStart(start + 12);
            setEnd(end + 12);
        }
    };

    const prevPage = () => {
        if (start >= 12) {
            setStart(start - 12);
            setEnd(end - 12);
        };
    }

    const maxReached = end >= totalHouses;
    const minReached = start === 0;

   return (
     <>
        <Row style={{backgroundColor: 'antiquewhite'}} xs={1} md={2} lg={3} className="g-4">
            {filteredHouses.slice(start, end).map((house, index) => (
                <Col key={index}>
                    <Link to={`/property/i/${house.id}`} className="category-link" >
                        <Card id="card">
                            <Card.Img variant="top" src={house.imageUrl} alt={house.name} style={{width: '316px', height: '180px'}} />
                            
                            <Card.Text>
                                <p id="card_price" >&nbsp;&nbsp;<b>{house.price}</b></p>
                                <h5>&nbsp;<b>{house.name}</b></h5>
                                <p>&nbsp;<img src={`${process.env.PUBLIC_URL}/images/location_icon.png`} width="20px" height="20ox" /> {house.location}</p>
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
        <div style={{display: 'block'}}>
            {minReached || <button onClick={prevPage}>prev page</button>}
            {maxReached || <button onClick={loadMore}>next page</button>}
        </div>
        </Row>
    </>

    );
};

export default Category;