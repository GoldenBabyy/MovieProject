import React from "react";
import { Redirect, Link } from "react-router-dom";

import Nav from "../HomePage/Navbar";
import FavoriteList from "./FavoriteList";

export function FavoritePage(props) {
  return (
    <div className="row">
      <Nav userName={props.location.state} />
      <Link to="/" className="btn btn-link">
        Home Menu
      </Link>
      <FavoriteList movies={props} />
    </div>
  );
}
