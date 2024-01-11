import React, { useState } from "react";
import MainHeader from "./MainHeader";
//import Input from "../components/formElements/Input";
import Button from "../../shared/components/formElements/Button";
import "./MainNavigation.css";
import Avatar from "../UIelements/Avatar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function MainNavigation({
  handleInputChange,
  query,
  selectedCategory,
  setQuery,
}) {
  const clearSearchHandler = () => {
    setQuery("");
  };
  const [profileModal, setProfileModal] = useState(false);
  const setProfileHandler = () => {
    setProfileModal((prev) => !prev);
  };

  return (
    <>
      <MainHeader>
        <div className="flex_left"></div>
        <div className="form-control__input">
          <div className="search-container">
            <input
              element="input"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              value={query}
            />
            <button className="search_btn" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="onClear" onClick={clearSearchHandler}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="prefered_search">
            {query || selectedCategory ? query || selectedCategory : "All"}
          </p>
        </div>
        <div className="flex_right">
          <div className="btn_div">
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>

            <div className="cart_btn">
              <Link to="/home/cart">
                <Button>My Cart</Button>
              </Link>

              <div className="cart_quantity">
                <h4>5</h4>
              </div>
            </div>
          </div>
          <div className="user-item__image">
            <Avatar
              image="../../images/lion (2).jpg"
              setProfileHandler={setProfileHandler}
            />

            {profileModal && (
              <div className="profile">
                <p>Profile</p>
                <p>Logout</p>
              </div>
            )}
          </div>
        </div>
      </MainHeader>
      <Outlet />
    </>
  );
}

export default MainNavigation;
