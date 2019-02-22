import React from "react";
import "./css/SearchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-bar-container">
        <form>
          <div class="ui massive action input">
            <input type="text" placeholder="Search..." />
            <button class="ui button">Search</button>
          </div>
        </form>
      </div>);
  }
}
