import React from "react";
import MainHeader from "./MainHeader";
import Input from "../components/formElements/Input";
import Button from "../../shared/components/formElements/Button";
import "./MainNavigation.css";
import Avatar from "../UIelements/Avatar";
function MainNavigation() {
  return (
    <MainHeader>
      <div className="flex_left"></div>
      <div className="form-control">
        <Input element="input" type="text" placeholder="Search items" />
      </div>
      <div className="flex_right">
        <div className="btn_div">
          <Button>Sign In</Button>
          <div className="cart_btn">
            <Button>My Cart</Button>
            <div className="cart_quantity">
              <h4>5</h4>
            </div>
          </div>
        </div>
        <div className="user-item__image">
          <Avatar image="../../images/lion (2).jpg" />
        </div>
      </div>
    </MainHeader>
  );
}

export default MainNavigation;
