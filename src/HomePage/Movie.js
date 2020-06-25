import React, { useState } from "react";
import "./movieCard.css";
import Button from "./Button";

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
              <Button
                text={"Remove Favorite"}
                click={() =>
                  props.unfavButton({
                    id: props.movieId,
                  })
                }
              />
            ) : (
              <span>
                <Button
                  text={"See Details"}
                  click={() => props.viewDetails(props.movieId)}
                />
                <Button
                  text={"Add Favorite"}
                  click={() =>
                    props.favButton({
                      id: props.movieId,
                      title: props.title,
                      overview: props.overview,
                      image: props.image,
                    })
                  }
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
