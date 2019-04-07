import React from "react";
import Movie from "./../Movie";
import "./style.css";

export default ({ movies, btnAction, btnText }) => (
  <section className="movies">
    {movies.map(movie => (
      <Movie
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        poster={movie.poster_path}
        releaseDate={movie.release_date}
        rate={movie.vote_average}
        genres={movie.genre_ids}
        btnAction={btnAction}
        btnText={btnText}
      />
    ))}
  </section>
);
