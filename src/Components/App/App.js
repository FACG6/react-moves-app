import React, { Component } from "react";
import Main from "./../Main";
import Nav from "./../Nav";
import Movie from "./../Movie"
import "./App.css";
import WatchList from "../WatchList";

export default class extends Component {
  state = {
    isRendered :false,
    watchlist: []
  }

  setIsRender = value =>{
    this.setState({isRendered : value})
  }
  addToWatchList= (movie)=>{
    const newWatchlist = [...this.state.watchlist, movie]
    this.setState({ watchlist: newWatchlist})
  }


  render() {
    const { isRendered, watchlist } = this.state;
    return (
      <React.Fragment>
        <Nav props="props"  setIsRender = {this.setIsRender } addToWatchList={this.addToWatchList}/>
        { isRendered ? <WatchList  watchlist={watchlist}/> : <Main setIsRender = {this.setIsRender} addToWatchList={this.addToWatchList} />}
        
      </React.Fragment>
    );
  }
}
