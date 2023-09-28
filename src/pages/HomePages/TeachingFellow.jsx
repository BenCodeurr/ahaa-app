/* eslint-disable no-unused-vars */
import React from "react";
import "./homepage.css";
import logo from "../../assets/logo_white.png";
import attendance_quest from "../../assets/chat.png";
import attendance_report from "../../assets/file.png";
import user from "../../assets/user.png";
import "../../fonts/fonts.css";

const TeachingFellow = () => {
  return (
    <div className="container">
      <div className="upper-container">
        <div className="logo">
          <img src={logo} alt="Ahaa logo" />
        </div>
        <h1>Home Page</h1>
        <div className="profile">
          <img src={user} className="user-icon" />
          <span>Profile</span>
        </div>
      </div>
      <div className="middle-container">
        <div className="card">
          <img src={attendance_quest} className="card-icon" />
          <span className="card-text">Attendance Question</span>
        </div>
        <div className="card">
          <img src={attendance_report} className="card-icon" />
          <span className="card-text">Attendacne Report</span>
        </div>
      </div>

      <div className="footer">
        <p>Copyright © 2023 | Ahaa Llc.</p>
      </div>
    </div>
  );
};

export default TeachingFellow;
