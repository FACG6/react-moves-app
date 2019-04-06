import React from "react";
import "./style.css";

export default props => (
  <nav className="nav">
    <div className="logo" href="#" onClick={() => props.setIsRender(false)}>
      Akshenha
    </div>
    <div className="navigation">
      <span className="welcome-text text">Hello Ahmed</span>
      <a href={props.href} className="navigate text">
        {props.value}
      </a>
    </div>
  </nav>
);
