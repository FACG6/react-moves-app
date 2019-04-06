import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./../Main";
import Nav from "./../Nav";
import WatchList from "./../WatchList";
import "./App.css";

export default class extends Component {
  state = {};

  render() {
    const { isRendered, watchlist } = this.state;
    return (
      // <React.Fragment>
      //   <Nav
      //     props="props"
      //     setIsRender={this.setIsRender}
      //     addToWatchList={this.addToWatchList}
      //   />
      //   {isRendered ? (
      //     <WatchList watchlist={watchlist} />
      //   ) : (
      //     <Main
      //       setIsRender={this.setIsRender}
      //       addToWatchList={this.addToWatchList}
      //     />
      //   )}
      // </React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            component={() => (
              <React.Fragment>
                <Nav value="Watchlist" href="/watchlist" />
                <Main />
              </React.Fragment>
            )}
          />
          <Route
            path={"/watchlist"}
            component={() => (
              <React.Fragment>
                <Nav value="Home Page" href="/" />
                <WatchList />
              </React.Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
