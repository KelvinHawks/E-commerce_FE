import React from "react";
import "./Sidebar.css";
//import Button from "../shared/components/formElements/Button";
import Business from "./business/Business";
import Homes from "./homes/Homes";
import Electronics from "./electronics/Electronics";
function Sidebar() {
  return (
    <div className="sidebar_container">
      <button className="department_btn">Departments</button>
      <div className="categories">
        <Electronics />
        <Business />
        <Homes />
      </div>
    </div>
  );
}

export default Sidebar;
