import React, { Component } from "react";
import Search from "./../Search";
import Movies from "./../Movies";
import getTrends from "./../../utilis/getTrends";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      movies: []
    };
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }
  updateSearchValue() {}
  componentDidMount() {
    getTrends().then(response => {
      this.setState({ movies: response.results.slice(0, 10) });
    });
  }
  render() {
    return (
      <main className="main">
        <Search />
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}
