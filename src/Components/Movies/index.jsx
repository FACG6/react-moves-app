import React from "react";
import Movie from "./../Movie";
import "./style.css";

export default ({
  movies,
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist
}) => (
  <section className="movies">
    {movies.map(movie => {
      if (!isInWatchlist) isInWatchlist = () => true;
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.summary}
          poster={movie.large_cover_image}
          releaseDate={movie.year}
          rate={movie.rating}
          genres={movie.genres}
          download={movie.torrents[0]}
          btnAction={
            isInWatchlist(movie.id) ? removeFromWatchlist : addToWatchlist
          }
          btnText={
            isInWatchlist(movie.id)
              ? "Remove from watchlist"
              : "Add to watchlist"
          }
          add={isInWatchlist(movie.id) ? false : true}
        />
      );
    })}
  </section>
);
