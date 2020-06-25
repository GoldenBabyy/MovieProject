import React from "react";
import Rating from "react-star-ratings";

const MovieDetails = (props) => {
  return (
    <div className="container-fluid text-white  m8 ">
      <div
        className="row"
        onClick={() => props.closeDetails()}
        style={{ cursor: "pointer", paddingTop: "20px" }}
      >
        <i className="fas fa-arrow-left"></i>
        <span className="mb-2 ml-3">
          <b>Back</b>
        </span>
      </div>

      <div className="col-sm-12">
        <div className="info.container">
          {props.currentMovie.poster_path == null ? (
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFpKVUcVn3fiOjuwf5hLu56tIZtSE5HRjw7wQOEmFpWkbd1kWd&usqp=CAU"
              }
              alt="cardImage"
            />
          ) : (
            <img
              src={
                "http://image.tmdb.org/t/p/w185" +
                props.currentMovie.poster_path
              }
              alt="cardImage"
              style={{ float: "left", marginRight: "15px" }}
            />
          )}
          <h3> {props.currentMovie.title}</h3>
          <p></p>

          <hr size="500px" />
          <p>
            <b>Release Date : </b>
            {new Intl.DateTimeFormat("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(new Date(props.currentMovie.release_date))}
          </p>
          <p>
            <b>Vote count : </b> {props.currentMovie.vote_count}
          </p>
          <p>
            <b>Rating : </b> {props.currentMovie.vote_average} / 10
          </p>
          <Rating
            rating={props.currentMovie.vote_average / 2}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="rgb(255, 255, 0)"
            starEmptyColor="rgb(203, 211, 227)"
            readOnly
          />
          <p>
            <b>Jumlah Penonton:</b> {props.currentMovie.popularity} penonton
          </p>
        </div>

        <div className="mt-4 mr-5" style={{ position: "absolute" }}>
          <h6>
            <b>Overview:</b>
          </h6>
          <p style={{ textAlign: "justify" }}>{props.currentMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
