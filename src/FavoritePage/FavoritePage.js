import React from "react";
import { Redirect, Link } from "react-router-dom";

import Nav from "../HomePage/Navbar";
import FavoriteList from "./FavoriteList";

export function FavoritePage(props) {
  const viewDetails = (id) => {
    const filteredMovie = movies.filter((movie) => movie.id == id);

    // Cek ada movienya atau ngga
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    setCurrentMovie(newCurrentMovie);
  };

  const favButton = (id) => {
    const filteredMovie = movies.filter((movie) => movie.id == id);
    const newFavMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    if (buttonFavText == "Favorite") {
      setButtonFavText("UnFavorite");
      movieActions.favorite(newFavMovie);
    } else {
      setButtonFavText("Favorite");
      movieActions.unFavorite(id);
      console.log(id);
    }
  };

  return (
    <div className="row">
      <Nav userName={props.location.state} />
      <Link to="/" className="btn btn-link">
        Home Menu
      </Link>
      <FavoriteList
        viewDetails={viewDetails}
        favButton={favButton}
        movies={props}
      />
    </div>
  );
}
