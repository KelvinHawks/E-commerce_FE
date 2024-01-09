import React, { useState } from "react";
import "./Products.css";
import Button from "../shared/components/formElements/Button";

function Products({ result, recommendedHandler }) {
  const firstOptions = ["Useless First", "Option 2", "Option 3", "Option 4"];
  const secondOptions = ["Conditions", "Option 2", "Option 3", "Option 4"];
  const thirdOptions = [
    "Deliverly options",
    "Option 2",
    "Option 3",
    "Option 4",
  ];
  const [options, setOptions] = useState([]);
  console.log(result);

  const handleSelectedOptions = (e) => {
    const target = e.target.value;
    setOptions(target);
  };
  // const recommendedHandler1 = () => {
  //   console.log("clicked");
  // };
  return (
    <div className="products_container">
      <div className="products-nav_container">
        <div className="div_left">
          <select value={options.firstOption} onChange={handleSelectedOptions}>
            {firstOptions.map((option, index) => (
              <option key={index} value={option} onClick={recommendedHandler}>
                {option}
              </option>
            ))}
          </select>
          <select value={options.secondOption} onChange={handleSelectedOptions}>
            {secondOptions.map((option, index) => (
              <option key={index} value={option} onClick={recommendedHandler}>
                {option}
              </option>
            ))}
          </select>
          <select value={options.thirdOption} onChange={handleSelectedOptions}>
            {thirdOptions.map((option, index) => (
              <option key={index} value={option} onClick={recommendedHandler}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="div_right">
          <Button value="" onClickHandler={recommendedHandler}>
            Show All
          </Button>
          <Button>Auction</Button>
          <Button>Deliverly Options</Button>
          <Button>
            <i className="fa-solid fa-list"></i>
          </Button>
          <Button>
            <i className="fa-brands fa-windows"></i>
          </Button>
        </div>
      </div>
      <div className="card_div">
        {result.length === 0 ? (
          <h1>No result, please try another option</h1>
        ) : (
          result
        )}
      </div>
    </div>
  );
}

export default Products;
