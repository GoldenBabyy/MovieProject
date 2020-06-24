import React, { useState } from "react";
import "./movieCard.css";

const Movie = (props) => {
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

            {props.flagFav ? (
              <button
                style={{ float: "right", position: "relative" }}
                onClick={() =>
                  props.unfavButton({
                    id: props.movieId,
                  })
                }
              >
                Remove Favorite
              </button>
            ) : (
              <span>
                <button onClick={() => props.viewDetails(props.movieId)}>
                  See Details
                </button>
                <button
                  style={{ float: "right", position: "relative" }}
                  onClick={() =>
                    props.favButton({
                      id: props.movieId,
                      title: props.title,
                      overview: props.overview,
                      image: props.image,
                    })
                  }
                >
                  Add to Favorite
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
