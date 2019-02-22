import React from "react";
import SearchBar from "./SearchBar";
import "./css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
      </div>
    );
  }
}
