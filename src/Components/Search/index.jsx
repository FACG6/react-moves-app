import React, { Component } from "react";

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
        <form action="" className="form">
          <input type="text" className="search-input" />
          <i className="search-icon" />
        </form>
        {/* filter section */}
        <div className="filter-div">
          <span className="filter-text text">Filter :</span>
          <select name="cat" className="drop-down cat">
            <option value="" disabled selected>
              Category
            </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
          </select>
          <select name="rate" className="drop-down rate">
            <option value="" disabled selected>
              Rate
            </option>
            <option value="Above 5.0">Above 5.0</option>
            <option value="Above 7.0">Above 7.0</option>
            <option value="Above 8.0">Above 8.0</option>
          </select>
        </div>
      </section>
    );
  }
}