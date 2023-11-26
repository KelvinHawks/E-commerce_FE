import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card_container">
      <img src=".././images/lion (2).jpg" alt="card" />
      <div className="description">
        <p>
          Vintage typewriter to post awesome stories about UI design and web dev
        </p>
        <h2>$ 49.50</h2>
      </div>

      <div className="small">
        <p>Eligible for shopping to mars and somewhere else</p>
      </div>
      <div className="rating">
        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>4.05</p>
        <button>
          <i className="fa-solid fa-heart"></i>
          Watch
        </button>
      </div>
    </div>
  );
}

export default Card;
