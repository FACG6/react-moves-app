import React, { Component } from "react";
import Search from "./../Search";
import Movies from "./../Movies";
import getTrends from "./../../utilis/getTrends";
import getMovie from "./../../utilis/getMovie";
import swal from "sweetalert2";
import "./style.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      movies: [],
      userDidSearch: false,
      userDidAdd: false,
      filter: {
        genre: "",
        rate: "",
        quality: ""
      }
    };
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.addToWatchlist = this.addToWatchlist.bind(this);
    this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
    this.isInWatchlist = this.isInWatchlist.bind(this);
  }
  addToWatchlist({ title, overview, releaseDate, poster, rate, id, genres }) {
    const watchlist = JSON.parse(window.localStorage.getItem("watchlist"));
    const ids = JSON.parse(window.localStorage.getItem("ids"));
    if (!watchlist) {
      window.localStorage.setItem(
        "watchlist",
        JSON.stringify([
          {
            title,
            summary: overview,
            year: releaseDate,
            large_cover_image: poster,
            rating: rate,
            genres,
            id
          }
        ])
      );
      window.localStorage.setItem("ids", JSON.stringify([id]));
    } else if (ids.includes(id)) {
      swal.fire({
        toast: true,
        position: "top-left",
        showConfirmButton: false,
        timer: 3000,
        type: "info",
        title: "Movie already exists in watchlist",
        customClass: {
          popup: "popup"
        }
      });
      return;
    } else {
      window.localStorage.setItem(
        "watchlist",
        JSON.stringify([
          ...watchlist,
          {
            title,
            summary: overview,
            year: releaseDate,
            large_cover_image: poster,
            rating: rate,
            genres,
            id
          }
        ])
      );
      window.localStorage.setItem("ids", JSON.stringify([...ids, id]));
      this.setState({ userDidAdd: !this.state.userDidAdd });
    }
    swal.fire({
      toast: true,
      position: "top-left",
      showConfirmButton: false,
      timer: 3000,
      type: "success",
      title: "Added Successfully",
      customClass: {
        popup: "popup"
      }
    });
  }
  updateSearchValue(e) {
    this.setState({ searchValue: e.target.value });
  }
  submitSearch(e) {
    e.preventDefault();
    if (!this.state.searchValue.trim()) return;
    getMovie(this.state.searchValue).then(response => {
      this.setState({
        movies: response.data.movies,
        userDidSearch: true
      });
    });
  }
  removeFromWatchlist({ id }) {
    const watchlist = JSON.parse(window.localStorage.getItem("watchlist"));
    const ids = JSON.parse(window.localStorage.getItem("ids"));

    const index = ids.indexOf(id);

    watchlist.splice(index, 1);
    ids.splice(index, 1);

    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
    window.localStorage.setItem("ids", JSON.stringify(ids));
    swal.fire({
      toast: true,
      position: "top-left",
      showConfirmButton: false,
      timer: 3000,
      type: "success",
      title: "Removed Successfully from watchlist",
      customClass: {
        popup: "popup"
      }
    });
    this.setState({ userDidAdd: !this.state.userDidAdd });
  }
  isInWatchlist(id) {
    const ids = JSON.parse(window.localStorage.getItem("ids"));
    if (!ids) return;
    return ids.includes(id);
  }
  componentDidMount() {
    getTrends().then(response => {
      this.setState({
        movies: response.data.movies,
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
          filter={this.filter}
        />
        <div className="movies-type">
          {this.state.userDidSearch ? (
            this.state.movies ? (
              "Your Search Results"
            ) : (
              <img
                src="https://webmarketingschool.com/wp-content/uploads/2018/03/nojobsfound.png"
                alt="OOPS! NO RESULTS FOUND"
              />
            )
          ) : (
            "Trending movies for the year"
          )}
        </div>
        <Movies
          addToWatchlist={this.addToWatchlist}
          removeFromWatchlist={this.removeFromWatchlist}
          isInWatchlist={this.isInWatchlist}
          movies={this.state.movies ? this.state.movies : []}
        />
      </main>
    );
  }
}
