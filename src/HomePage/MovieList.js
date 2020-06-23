import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  console.log(props.movies.length);

  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "250px" }}>
        <div className="col-sm-12">
          {props.movies.length == 0 && props.currentView ? (
            <p className="text-white center"> No Movies Available</p>
          ) : (
            <div className="col-sm-12">
              {props.movies.map((movie, i) => {
                return (
                  <Movie
                    key={i}
                    viewDetails={props.viewDetails}
                    favButton={props.favButton}
                    fav={props.fav}
                    movieId={movie.id}
                    image={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
