import React from "react";
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
  genres,
  add,
  download
}) => (
  <div className="movie-card">
    <div className="image-watchlist">
      <img src={poster} alt="Poster" className="poster" />
      <div
        className={`add-to-watchlist ${add ? "add" : "remove"}`}
        onClick={() =>
          btnAction({
            title,
            releaseDate,
            rate,
            overview,
            poster,
            id,
            genres,
            torrents: [download]
          })
        }
      >
        <i
          className={`icon fas fa-${
            btnText === "Add to watchlist" ? "plus" : "minus"
          }-circle`}
        />
        <span className="add-to-watchlist-text text">{btnText}</span>
      </div>
    </div>
    <div className="details-download">
      <div className="movie-details">
        <span className="movie-title movie-details-item">{title}</span>
        <span className="movie-date movie-details-item">
          <span className="bold-text">Release Year: </span> {releaseDate}
        </span>
        <span className="movie-cat movie-details-item">
          <span className="bold-text">Categories: </span>
          {genres.map(genre => (
            <div>{genre}</div>
          ))}
        </span>
        <span className="movie-rate movie-details-item">
          <span className="bold-text">Rate:</span> {rate}
          <span className="rate-small">/10</span>
        </span>
        <div className="overview movie-details-item">
          <span className="overview-text text bold-text">Overview : </span>
          <p className="overview-description">{overview}</p>
        </div>
      </div>
      <a href={download.url}>
        <div className="download">
          Download{" "}
          <span className="download-small">
            ({download.quality} {download.type} torrent)
          </span>
        </div>
      </a>
    </div>
  </div>
);
