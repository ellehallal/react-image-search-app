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
        query: query,
        per_page: 30,
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
      `Displaying ${this.state.resultsNumber} image(s):`
    )
  }


  render() {
    return (
      <div className="container">
        <div>
          <h1>
            Imagy
          </h1>
          <p className="tagline">Search for an image below:</p>
        </div>

        <SearchBar onSearchSubmit={this.onSearchSubmit} />

        <div className="results-container">
          <SearchResults data={this.state.images} resultsNumber={this.displayNumberOfResults()} />
        </div>
      </div>
    );
  }
}
