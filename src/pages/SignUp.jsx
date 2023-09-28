/* eslint-disable no-unused-vars */
import React from "react";
// import "./style.css";
import logo from "../assets/logo.png";
import "../fonts/fonts.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="mini-container">
        <div className="left-side">
          <h1>
            sign up <span>&#8594;</span>
          </h1>
          <p>Your favorite attendance management system</p>
        </div>
        <div className="right-side">
          <div className="logo">
            <img src={logo} alt="Ahaa Logo" />
          </div>
          <p>Hello! Create your account</p>
          <form>
            <div className="form-group">
              <label htmlFor="email" style={{ color: "gray" }}>
                Email Address
              </label>
              <div className="input-icon">
                <span className="icon">&#x2709;</span>
                <input type="email" id="email" placeholder="Your email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: "gray" }}>
                Password
              </label>
              <div className="input-icon">
                <span className="icon">&#x1F512;</span>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: "gray" }}>
                Confirm Password
              </label>
              <div className="input-icon">
                <span className="icon">&#x1F512;</span>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>

            <button type="submit" style={{ width: "100%", fontSize: "18px" }}>
              Sign Up
            </button>
            <div className="login">
              Already have an account? <span>Log In</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
