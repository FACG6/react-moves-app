import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./../Main";
import Nav from "./../Nav";
import WatchList from "./../WatchList";
import "./App.css";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <React.Fragment>
            <Nav value="Watchlist" href="/watchlist" />
            <Main />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path={"/watchlist"}
        component={() => (
          <React.Fragment>
            <Nav value="Home Page" href="/" />
            <WatchList />
          </React.Fragment>
        )}
      />
      <Route
        component={() => (
          <img
            src="http://www.gmailsupportpedia.com/images/404.jpg"
            style={{
              "margin-left": "25%"
            }}
            alt="404 PAGE NOT FOUND"
          />
        )}
      />
    </Switch>
  </BrowserRouter>
);
