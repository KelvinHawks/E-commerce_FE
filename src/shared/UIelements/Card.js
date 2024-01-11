import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
function Card(props) {
  const { addItem } = useCart();
  return (
    <div className="card_container">
      <Link to={`/home/item/${props.id}`} className="item__link">
        <img src={props.image} alt="card" />
        <div className="description">
          <p>{props.description}</p>
          <h2>{`$ ${props.price}`}</h2>
        </div>

        <div className="small">
          <p>{props.small}</p>
        </div>
      </Link>
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
        <button onClick={() => addItem(props.item)}>Cart</button>
      </div>
    </div>
  );
}

export default Card;
