import React, { useState } from "react";
import "./Electronics.css";
const Filter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilter = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button onClick={toggleFilter} className="Electronic-filter_btn">
        Electronics
        <span className="arrow">
          {isExpanded ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </span>
      </button>
      {isExpanded && (
        <div className="filter-options">
          {/* Your filter options/content here */}

          <select>
            <option value="option1">Cell Phones and SmartPhones</option>
            <option value="option2">Option 2</option>
          </select>

          <select>
            <option value="option1">Computers</option>
            <option value="option2">Option 2</option>
          </select>

          {/* Add more filter elements as needed */}
        </div>
      )}
    </div>
  );
};

export default Filter;
