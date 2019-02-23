import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar";
import "./css/App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  onSearchSubmit = async (query) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: query
      }
    })

    this.setState({ images: response.data.results })

    console.log(response.data.results)
  }



  render() {
    return (
      <div className="container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}
