/* eslint-disable no-unused-vars */
import React from "react";
import "./homepage.css";
import logo from "../../assets/logo_white.png";
import attendance from "../../assets/calendar.png";
import absence from "../../assets/report.png";
import request from "../../assets/clipboard.png";
import user from "../../assets/user.png";
import "../../fonts/fonts.css";

const Student = () => {
  return (
    <div className="container">
        <div className="upper-container">
            <div className="logo">
                <img src={logo} alt="Ahaa logo"/>
            </div>
            <h1>Home Page</h1>
            <div className="profile">
                <img src= {user} className="user-icon"/>
                <span>Profile</span>
            </div>
        </div>
        <div className="middle-container">
            <div className="card">
                <img src= {attendance} className="card-icon"/>
                <span className="card-text">Attendance</span>
            </div>
            <div className="card">
            <img src= {absence} className="card-icon"/>
                <span className="card-text">Absence Reporting</span>
            </div>
            <div className="card">
            <img src= {request} className="card-icon"/>
                <span className="card-text">Leave Request</span>
            </div>
        </div>

        <div className="footer">
            <p>Copyright © 2023 | Ahaa Llc.</p>
        </div>
    </div>
  );
};

export default Student;
