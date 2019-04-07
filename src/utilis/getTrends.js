import { TRENDS_URL } from "../config";

export default () =>
  fetch(TRENDS_URL)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
