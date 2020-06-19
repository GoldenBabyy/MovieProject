import React from "react";
import MovieList from "./MovieList";
import "./Searchbar.css";

const SearchBar = (props) => {
  return (
    <div className="col-md-12 kiri text-white">
      <span>
        <i className="fas fa-search"></i>
      </span>
      <form className="form-group" action="" onSubmit={props.handleSubmit}>
        <input
          className="text-white search"
          placeholder="Search Movie"
          type="text"
          onChange={props.handleChange}
          style={{ marginLeft: "16px", width: "200%" }}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
