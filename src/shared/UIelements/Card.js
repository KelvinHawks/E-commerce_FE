import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <Link to={`/home/item/${props.id}`} className="item__link">
      <div className="card_container">
        <img src={props.image} alt="card" />
        <div className="description">
          <p>{props.description}</p>
          <h2>{`$ ${props.price}`}</h2>
        </div>

        <div className="small">
          <p>{props.small}</p>
        </div>
        <div className="rating">
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>{props.rating}</p>
          <button>
            <i className="fa-solid fa-heart"></i>
            Watch
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
