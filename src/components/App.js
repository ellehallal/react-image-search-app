import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import "./css/App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      resultsNumber: null,
    }
  }

  onSearchSubmit = async (query) => {

    const response = await unsplash.get('/search/photos', {
      params: {
        query: query
      }
    })
    this.setState({ images: response.data.results })
    this.setState({ resultsNumber: response.data.results.length })
  }

  displayNumberOfResults = () => {
    if (this.state.resultsNumber === 0) {
      return (
        "No results"
      )
    } else if (this.state.resultsNumber === null) {
      return (
        ""
      )
    }
    return (
      `Found ${this.state.resultsNumber} image(s)`
    )
  }


  render() {
    return (
      <div className="container">
        <div>
          <h1 className="ui huge center aligned header">
            Image Search
          </h1>
        </div>

        <SearchBar onSearchSubmit={this.onSearchSubmit} />

        <div data-test="results-number">
          {this.displayNumberOfResults()}
        </div>

        <div className="results-container">
          <SearchResults data={this.state.images} />
        </div>
      </div>
    );
  }
}
