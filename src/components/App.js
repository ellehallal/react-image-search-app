import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import "./css/App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSearchSubmit(query) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: query
      },
      headers: {
        Authorization: 'Client-ID ' + process.env.REACT_APP_ACCESS_KEY
      }

    })
  }



  render() {
    return (
      <div className="container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
