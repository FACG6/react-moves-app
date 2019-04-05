import { API_KEY } from "../config";

export default movieName =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}`
  )
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
