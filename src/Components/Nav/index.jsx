import React, { Component } from "react";
import "./nav.css";

export default props => (
  <nav className="nav">
    <div className="logo">Akshenha</div>
    <div className="navigation">
      <span className="welcome-text text">Hello Ahmed</span>
      <a href="/" className="navigate text">
        Watchlist
      </a>
    </div>
  </nav>
);
