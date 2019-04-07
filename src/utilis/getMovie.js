import { SEARCH_MOVIE_URL } from "../config";

export default (movieName, genre, quality, rating) =>
  fetch(`${SEARCH_MOVIE_URL}${movieName}${genre}${quality}${rating}`)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
