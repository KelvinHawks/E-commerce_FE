import React from "react";
import { useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/property.css'
import { Button } from "react-bootstrap";


const ItemDisplay = ({ data }) => {

    //extract item id from url
    const { ItemId } = useParams();
    console.log(ItemId);
    console.log(data);

    //find the iten in the data
    const selectedItem = data.find((item) => item.id === parseInt(ItemId));

    if (!selectedItem){
        return(
            <div>Item not Found</div>
        );
    };

    const { name, imageUrl, description, price, owner } = selectedItem;

    const features = ['Police Patrol', 'Electricity', 'Water', 'Road', 'Shopping Center', 'Police Post', 'Primary School', 'Secondary School', 'University', 'Hospital'];

    return (
        <div  className="container" >
            <div className="text-center item-name" >
                <h3><b>{name}</b></h3>
            </div>
            <div className="d-flex" >
                <img src={`${process.env.PUBLIC_URL}/images/icon_png.png`} width="60px" height="60px" />
                <div id="icon-name">
                    <p className="icon-name" ><b>Donpaul Oduor</b></p>
                    <p className="icon-name" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owner</p>
                </div>
            </div>
            <div className="row text-center" id="item-image" >
                <div className="col-md-6  " >
                    <img src={ imageUrl } alt={name} className="img-fluid" />
                    <p id="tour-link"><Link to="www.youtube.com"><b>Request Video Tour...</b></Link>  </p>
                </div>
                <div className="col-md-6 text-center">
                    <h4><b>Description</b></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h5><b>Price</b></h5>
                    <p><b>{price}</b></p>
                    <h5><b>Features</b></h5>
                    <ul>
                        {features.map((feature) => (
                            <li>{feature}</li>
                        )
                         )}
                    </ul>
                    <Button><b>Contact Owner</b></Button>
                </div>

            </div>
        </div>


    );
};

export default ItemDisplay;

