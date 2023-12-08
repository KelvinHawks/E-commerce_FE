import React from "react";
import "./Card.css";
function Card(props) {
  return (
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
  );
}

export default Card;
