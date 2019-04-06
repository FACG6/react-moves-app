import React from "react";
import Movie from "./../Movie";
import "./style.css";

export default props => (
  <section className="movies">
    {props.movies.map(movie => (
      <Movie
        title={movie.title}
        overview={movie.overview}
        poster={movie.poster_path}
        releaseDate={movie.release_date}
        rate={movie.vote_average}
      />
    ))}
  </section>
);
