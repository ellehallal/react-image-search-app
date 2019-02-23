import React from "react";
import "./css/SearchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onInputChange = (event) => {
    this.setState({ query: event.target.value })
    console.log(this.state.query)
  }


  render() {
    return (
      <div className="search-bar-container">
        <form>
          <div className="ui massive action input">
            <input type="text" placeholder="Search..." value={this.state.query} onChange={this.onInputChange} />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>);
  }
}
