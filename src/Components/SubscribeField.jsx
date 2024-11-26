import React from "react";
import "./SubscribeField.css";

const SubscribeField = () => {
  return (
    <div className="subscribe-container">
        <h4 className="newsletter">Newsletter</h4>
      <h2 className="subscribe-title">Watch your courses</h2>
      <p className="subscribe-description">
        Get the latest updates and offers directly in your inbox.
      </p>
      <form className="subscribe-form">
        <input
          type="email"
          placeholder=" Your Email"
          className="subscribe-input"
          required
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeField;
