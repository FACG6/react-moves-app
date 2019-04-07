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
    <div className="filter-div">
      <div className="genre-select select">
        <span className="select-text">Genre:</span>
        <select
          name="genre"
          id="genre"
          className="drop-down genre"
          onChange={props.updateGenre}
        >
          <option value="all" selected>
            All
          </option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="sci-fi">SCI-FI</option>
          <option value="horror">Horro</option>
        </select>
      </div>
      <div className="rate-select select">
        <span className="select-text">Rating:</span>
        <select
          name="rate"
          id="rate"
          className="drop-down rate"
          onChange={props.updateRate}
        >
          <option value="all" selected>
            All
          </option>
          <option value="1">above 1</option>
          <option value="2">above 2</option>
          <option value="3">above 3</option>
          <option value="4">above 4</option>
          <option value="5">above 5</option>
          <option value="6">above 6</option>
          <option value="7">above 7</option>
          <option value="8">above 8</option>
          <option value="9">above 9</option>
        </select>
      </div>
      <div className="quality-select select">
        <span className="select-text">Quality:</span>
        <select
          name="quality"
          id="quality"
          className="drop-down quality"
          onChange={props.updateQuality}
        >
          <option value="all" selected>
            All
          </option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="3D">3D</option>
        </select>
      </div>
      <div className="search-btn select" onClick={props.submitSearch}>
        Search
      </div>
    </div>
  </section>
);
