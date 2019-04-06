import React from "react";
import "./style.css";

export default ({ title, overview, releaseDate, rate, poster }) => (
  <div className="movie-card">
    <div className="image-watchlist">
      <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`}
        alt="Poster"
        className="poster"
      />
      <div className="add-to-watchlist">
        <i className="add-icon fas fa-plus-circle" />
        <span className="add-to-watchlist-text text">Add to watchlist</span>
      </div>
    </div>
    <div className="movie-details">
      <span className="movie-title">{title}</span>
      <span className="movie-date">{releaseDate}</span>
      <span className="movie-cat">Category</span>
      <span className="movie-rate">Rate: {rate}</span>
      <div className="overview">
        <span className="overview-text text">Overview : </span>
        <p className="overview-description">{overview}</p>
      </div>
    </div>
  </div>
);
