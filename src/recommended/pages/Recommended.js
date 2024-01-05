import React from "react";
import "./Recommended.css";
function Recommended({ recommendedHandler }) {
  return (
    <div className="recommended_div">
      <button value="clothes" onClick={recommendedHandler}>
        <i className="fa-solid fa-vest-patches"></i>
        Clothing and shoes
      </button>
      <button onClick={recommendedHandler} value="entertainment">
        <i className="fa-solid fa-film"></i>
        Entertainment
      </button>
      <button onClick={recommendedHandler} value="music">
        <i className="fa-solid fa-music"></i>
        Music
      </button>
      <button onClick={recommendedHandler} value="pets">
        <i className="fa-solid fa-shield-cat"></i>
        Pets
      </button>
      <button onClick={recommendedHandler} value="sport">
        <i className="fa-solid fa-vest-patches"></i>
        Sport and Lifestyle
      </button>
      <button onClick={recommendedHandler} value="kitchen">
        <i className="fa-solid fa-kitchen-set"></i>
        Kitchen Accessories
      </button>
      <button onClick={recommendedHandler} value="travel">
        <i className="fa-solid fa-road-bridge"></i>
        Travel Equipments
      </button>
    </div>
  );
}

export default Recommended;
