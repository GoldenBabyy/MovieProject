import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Nav from "../Header/Navbar";
import FavoriteList from "./FavoriteList";
import MovieList from "../HomePage/MovieList";

export function FavoritePage(props) {
  const movie = useSelector((state) => state.movieReducer);

  return (
    <div className="row">
      <Nav userName={props.location.userName} menu={"Favorite"} />
      <FavoriteList
        favMovies={movie}
        favFlag={true}
        viewDetails={props.location.viewDetails}
        favButton={props.location.favButton}
        unfavButton={props.location.unfavButton}
      />
    </div>
  );
}
