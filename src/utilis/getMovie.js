import { SEARCH_MOVIE_URL } from "../config";

export default movieName =>
  fetch(`${SEARCH_MOVIE_URL}${movieName}`)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
