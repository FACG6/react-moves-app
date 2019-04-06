import React, { Component } from "react";
import Main from "./../Main";
import Nav from "./../Nav";
import "./App.css";

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav props="props" />
        <Main />
      </React.Fragment>
    );
  }
}