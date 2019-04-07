import React from "react";
import "./style.css";

export default props => (
  <section className="search">
    <form onSubmit={props.submitSearch} className="form">
      <input
        type="text"
        placeholder="Search for a movie"
        className="search-input"
        onChange={props.updateSearchValue}
        value={props.searchValue}
      />
      <div className="search-icon-div">
        <i className="search-icon fas fa-search" />
      </div>
    </form>
  </section>
);
