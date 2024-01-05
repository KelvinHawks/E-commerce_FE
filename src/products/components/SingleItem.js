import React from "react";
import { Data } from "../../data/Data";
import "./SingleItem.css";
import { useParams } from "react-router-dom";
function SingleItem() {
  const itemId = useParams().Pid;

  const filteredData = Data.find((item) => item.id === parseInt(itemId));

  return (
    <div className="item_container">
      <div className="item_header">
        <h3>
          <b>{filteredData.name}</b>
        </h3>
      </div>

      <div className="item__container-content" id="item-image">
        <div className="content_div">
          <img
            src={`../${filteredData.image}`}
            alt="item"
            className="img-fluid"
            width="800px"
          />
        </div>
        <div className="item_description">
          <h4>
            <b>Description</b>
          </h4>
          <p>{filteredData.description}</p>
          <h5>
            <b>Price</b>
          </h5>
          <p>
            <b>{`Ksh ${filteredData.price}.00`}</b>
          </p>
          <h5>
            <b>Features</b>
          </h5>
          <p>{filteredData.small}</p>
          <button>
            <b>Checkout</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
