import React from "react";
import "./style.css";

export default props => (
  <nav className="nav">
    <div className="logo" href="#" onClick={() => props.setIsRender(false)}>
      Akshenha
    </div>
    <div className="navigation">
      <span className="welcome-text text">Hello Ahmed</span>
      <a
        href="#"
        onClick={() => props.setIsRender(true)}
        className="navigate text"
      >
        Watchlist
      </a>
    </div>
  </nav>
);
