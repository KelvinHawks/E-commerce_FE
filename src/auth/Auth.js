import React, { useState } from "react";
import "./Auth.css";
function Auth() {
  const [formInputs, setFormInputs] = useState({
    //secret: "",
    username: "",
    email: "",
    password: "",
  });
  const [isSignUpMode, setIsSignupMode] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formInputs);
    setFormInputs({
      username: "",
      email: "",
      password: "",
    });
  };
  const switchAdminHandler = () => {
    setIsSignupMode((prevAdmin) => !prevAdmin);
  };

  return (
    <div className="signUp-form">
      <div>
        <button onClick={switchAdminHandler}>
          {isSignUpMode ? "Switch to Login" : "Switch to Signup"}
        </button>
      </div>

      <form onSubmit={submitHandler} className="Auth-form">
        {isSignUpMode && (
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={inputChangeHandler}
            value={formInputs.username}
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={inputChangeHandler}
          value={formInputs.email}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={inputChangeHandler}
          value={formInputs.password}
        />
        <button className="btn-signUp">
          {isSignUpMode ? "Sign Up" : "Login"}
        </button>
      </form>
      <div id="signInDiv"></div>
    </div>
  );
}

export default Auth;
