import React, { Component } from "react";
import Search from "./../Search";
import Movies from "./../Movies";
import getTrends from "./../../utilis/getTrends";
import getMovie from "./../../utilis/getMovie";
import "./style.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      movies: [],
      userDidSearch: false
    };
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
  }
  addToWatchList({ title, overview, releaseDate, poster, rate, id, genres }) {
    const watchlist = JSON.parse(window.localStorage.getItem("watchlist"));
    const ids = JSON.parse(window.localStorage.getItem("ids"));
    if (!watchlist) {
      window.localStorage.setItem(
        "watchlist",
        JSON.stringify([
          {
            title,
            overview,
            release_date: releaseDate,
            poster_path: poster,
            rate,
            genre_ids: genres,
            id
          }
        ])
      );
      window.localStorage.setItem("ids", JSON.stringify([id]));
    } else if (ids.includes(id)) return;
    else {
      window.localStorage.setItem(
        "watchlist",
        JSON.stringify([
          ...watchlist,
          {
            title,
            overview,
            release_date: releaseDate,
            poster_path: poster,
            rate,
            genre_ids: genres,
            id
          }
        ])
      );
      window.localStorage.setItem("ids", JSON.stringify([...ids, id]));
    }
  }
  updateSearchValue(e) {
    this.setState({ searchValue: e.target.value });
  }
  submitSearch(e) {
    e.preventDefault();
    getMovie(this.state.searchValue).then(response => {
      this.setState({
        movies: response.results.slice(0, 10),
        userDidSearch: true
      });
    });
  }
  componentDidMount() {
    getTrends().then(response => {
      this.setState({
        movies: response.results.slice(0, 10),
        userDidSearch: false
      });
    });
  }
  render() {
    return (
      <main className="main">
        <Search
          updateSearchValue={this.updateSearchValue}
          searchValue={this.state.searchValue}
          submitSearch={this.submitSearch}
        />
        <div className="movies-type">
          {this.state.userDidSearch
            ? "Your Search Results"
            : "Top Watched movies for this week"}
        </div>
        <Movies
          btnAction={this.addToWatchList}
          btnText="Add to watchlist"
          movies={this.state.movies}
        />
      </main>
    );
  }
}
