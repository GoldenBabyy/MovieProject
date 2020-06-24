import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Nav from "../HomePage/Navbar";
import FavoriteList from "./FavoriteList";

export function FavoritePage(props) {
  console.log(props);
  const movie = useSelector((state) => state.movieReducer);
  console.log(movie);
  return (
    <div className="row">
      <Nav userName={props.location.state} />
      <Link to="/" className="btn btn-link">
        Home Menu
      </Link>
      <FavoriteList favMovies={movie} />
    </div>
  );
}
