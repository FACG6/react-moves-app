import React from "react";
import Movie from "./../Movie";
import "./style.css";

export default ({ movies, onClick ,addToWatchList}) => console.log(addToWatchList)|| (
  <section className="movies">
    {movies.map(movie => (
      <Movie
      addToWatchList={addToWatchList}      
        onClick={onClick}
        title={movie.title}
        overview={movie.overview}
        poster={movie.poster_path}
        releaseDate={movie.release_date}
        rate={movie.vote_average}
      />
    ))}
  </section>
);
