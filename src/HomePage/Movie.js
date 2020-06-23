import React, { useState } from "react";
import { connect } from "react-redux";

import { Card, Button } from "react-bootstrap";
import "./movieCard.css";
import btn from "./button";
import movieActions from "../_actions";

const Movie = (props) => {
  // console.log(props);

  return (
    <div className="col s12 m6 l3">
      <div className="wrapper">
        <div className="card">
          {props.image == null ? (
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFpKVUcVn3fiOjuwf5hLu56tIZtSE5HRjw7wQOEmFpWkbd1kWd&usqp=CAU"
              }
              alt="card image"
            />
          ) : (
            <img
              src={"http://image.tmdb.org/t/p/w185" + props.image}
              alt="card image"
            />
          )}
          <div className="descriptions">
            <h5>{props.title}</h5>
            <p style={{ textAlign: "justify" }}>{props.overview}</p>

            <button onClick={() => props.viewDetails(props.movieId)}>
              See Details
            </button>

            <button
              style={{ float: "right" }}
              onClick={() => props.favButton(props.title)}
            >
              {props.fav}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { favs } = state;
  // console.log(state.movieReducer.favs);
  return {
    favs,
  };
}

export default connect(mapStateToProps)(Movie);
// export { connected as Movie };

// export default Movie;
