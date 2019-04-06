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
  }
  updateSearchValue(e) {
    this.setState({ searchValue: e.target.value });
    // this.state.searchValue = e.target.value;
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
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}
