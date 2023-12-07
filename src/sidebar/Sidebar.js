import React from "react";
import "./Sidebar.css";
//import Button from "../shared/components/formElements/Button";
import Business from "./business/Business";
import Homes from "./homes/Homes";
import Electronics from "./electronics/Electronics";
function Sidebar({ recommendedHandler }) {
  return (
    <div className="sidebar_container">
      <button className="department_btn" value="" onClick={recommendedHandler}>
        Departments
      </button>
      <div className="categories">
        <Electronics recommendedHandler={recommendedHandler} />
        <Business recommendedHandler={recommendedHandler} />
        <Homes recommendedHandler={recommendedHandler} />
      </div>
    </div>
  );
}

export default Sidebar;
