import React, { Component } from 'react';
import './nav.css';

const nav = (props) =>
    <div>
    <div className="logo" >Akshenha</div>
    <span className="welcome-text text">Hello Ahmad</span>
    <a className={props.text}>watchlist</a>
  </div>

export default nav;
