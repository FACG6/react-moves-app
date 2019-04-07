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
          overview={movie.overview}
          poster={movie.poster_path}
          releaseDate={movie.release_date}
          rate={movie.vote_average}
          genres={movie.genre_ids}
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
