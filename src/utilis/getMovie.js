import { SEARCH_MOVIE_URL, SEARCH_NO_QUERY } from "../config";

export default (movieName, genre, quality, rating) => {
  if (!movieName)
    fetch(`${SEARCH_NO_QUERY}${movieName}${genre}${quality}${rating}`)
      .then(res => res.json())
      .catch(err => {
        throw err;
      });
  return fetch(`${SEARCH_MOVIE_URL}${movieName}${genre}${quality}${rating}`)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
};
