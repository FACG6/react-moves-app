import React, { Component } from "react";
import "./style.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null,
      rate: null
    };
  }
  render() {
    return (
      <section className="search">
        {/* form section */}
        <form onSubmit={this.props.submitSearch} className="form">
          <input
            type="text"
            placeholder="Search for a movie"
            className="search-input"
            onChange={this.props.updateSearchValue}
            value={this.props.searchValue}
          />
          <div className="search-icon-div">
            <i className="search-icon fas fa-search" />
          </div>
        </form>
      </section>
    );
  }
}
