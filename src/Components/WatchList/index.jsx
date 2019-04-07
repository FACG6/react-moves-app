import React, { Component } from "react";
import Movies from "./../Movies";
import "./style.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: JSON.parse(window.localStorage.getItem("watchlist"))
    };
    this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
  }
  removeFromWatchlist({ id }) {
    const watchlist = JSON.parse(window.localStorage.getItem("watchlist"));
    const ids = JSON.parse(window.localStorage.getItem("ids"));

    const index = ids.indexOf(id);

    watchlist.splice(index, 1);
    ids.splice(index, 1);

    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
    window.localStorage.setItem("ids", JSON.stringify(ids));

    this.setState({
      movies: JSON.parse(window.localStorage.getItem("watchlist"))
    });
  }
  render() {
    const { movies } = this.state;
    return (
      <main className="main">
        {movies && movies.length !== 0 ? (
          <React.Fragment>
            <div className="watchlist-text">My Watchlist</div>
            <Movies
              btnAction={this.removeFromWatchlist}
              btnText={"Remove from watchlist"}
              movies={movies}
            />
          </React.Fragment>
        ) : (
          <div className="watchlist-text">
            You don't have movies in your watchlist
          </div>
        )}
      </main>
    );
  }
}
