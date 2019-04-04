import React, { Component } from "react";
import Search from "./../Search";
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
        <Search />
        <h1>Main</h1>
      </main>
    );
  }
}
