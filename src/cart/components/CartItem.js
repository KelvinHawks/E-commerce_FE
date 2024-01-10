import React from "react";

function CartItem() {
  return (
    <div className="item_container">
      <div className="item_header">
        <h3>
          <b>Watch</b>
        </h3>
      </div>

      <div className="item__container-content" id="item-image">
        <div className="content_div">
          <img
            src="../../images/pexels-pixabay-280250.jpg"
            alt="item"
            className="img-fluid"
            width="800px"
          />
        </div>
        <div className="item_description">
          <h4>
            <b>Description</b>
          </h4>
          <p>This is cool</p>
          <h5>
            <b>Price</b>
          </h5>
          <p>
            <b>{`Ksh 25.00`}</b>
          </p>
          <h5>
            <b>Features</b>
          </h5>
          <p>Get at the best price</p>
          <button>
            <b>Checkout</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
