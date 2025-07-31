import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <p className="about-paragraph">
        Welcome to our platform! This app demonstrates theme switching, routing,
        and API integration ( using axios ) using modern React practices. It's
        built for developers looking to learn and grow. Is it compatible with
        all devices. you can check responsiveness by opening this app on
        different devices like mobile / laptop / desktop etc .
      </p>

      <button className="about-button">Learn More</button>

      <div className="card-list">
        <div className="card">
          <h3>React</h3>
          <p>Component-based UI library</p>
        </div>
        <div className="card">
          <h3>Routing</h3>
          <p>Navigation between pages using React Router</p>
        </div>
        <div className="card">
          <h3>API Integration</h3>
          <p>Fetching data using Axios </p>
        </div>
      </div>
    </div>
  );
}

export default About;
