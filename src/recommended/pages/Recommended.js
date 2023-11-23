import React from "react";
import "./Recommended.css";
function Recommended() {
  const recommendedHandler = () => {
    console.log("clicked");
  };
  return (
    <div className="recommended_div">
      <button onClick={recommendedHandler} value="clothes">
        <i className="fa-solid fa-vest-patches"></i>
        <p>Clothing and shoes</p>
      </button>
      <button onClick={recommendedHandler} value="clothes">
        <i className="fa-solid fa-film"></i>
        <p>Entertainment</p>
      </button>
      <button onClick={recommendedHandler} value="clothes">
        <i className="fa-solid fa-music"></i>
        <p>Music</p>
      </button>
      <button onClick={recommendedHandler} value="clothes">
        <i className="fa-solid fa-shield-cat"></i>
        <p>Pets</p>
      </button>
      <button onClick={recommendedHandler} value="clothes">
        <i className="fa-solid fa-vest-patches"></i>
        <p>Sport and Lifestyle</p>
      </button>
      <button onClick={recommendedHandler} value="clothes">
        <i className="fa-solid fa-kitchen-set"></i>
        <p>Kitchen Accessories</p>
      </button>
      <button onClick={recommendedHandler} value="clothes">
        <i className="fa-solid fa-road-bridge"></i>
        <p>Travel Equipments</p>
      </button>
    </div>
  );
}

export default Recommended;
