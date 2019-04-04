import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null
    };
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }
  updateSearchValue() {}
  render() {
    return (
      <main className="main">
        <h1>Main</h1>
        <h1>Main</h1>
      </main>
    );
  }
}
