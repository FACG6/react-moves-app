import React from "react";
import { GENRES } from "./../../config";
import "./style.css";

export default ({
  title,
  overview,
  releaseDate,
  rate,
  poster,
  id,
  btnAction,
  btnText,
  genres
}) => (
  <div className="movie-card">
    <div className="image-watchlist">
      <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`}
        alt="Poster"
        className="poster"
      />
      <div
        className="add-to-watchlist"
        onClick={() =>
          btnAction({ title, releaseDate, rate, overview, poster, id, genres })
        }
      >
        <i
          className={`icon fas fa-${
            btnText === "Add to watchlist" ? "plus" : "times"
          }-circle`}
        />
        <span className="add-to-watchlist-text text">{btnText}</span>
      </div>
    </div>
    <div className="movie-details">
      <span className="movie-title">{title}</span>
      <span className="movie-date">{releaseDate}</span>
      <span className="movie-cat">
        <span className="bold-text">Categories: </span>
        {genres.map(genre => (
          <div>{GENRES.find(ele => ele.id === genre).name}</div>
        ))}
      </span>
      <span className="movie-rate">
        <span className="bold-text">Rate:</span> {rate}
        <span className="rate-small">/10</span>
      </span>
      <div className="overview">
        <span className="overview-text text bold-text">Overview : </span>
        <p className="overview-description">{overview}</p>
      </div>
    </div>
  </div>
);
