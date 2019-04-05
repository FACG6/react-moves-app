import { API_KEY } from "../config";

export default () =>
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`
  )
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
