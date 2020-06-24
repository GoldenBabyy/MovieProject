import React from "react";
import Movie from "../HomePage/Movie";

const FavoriteList = (props) => {
  console.log(props);
  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "250px" }}>
        <div className="col-sm-12">
          {props.favMovies.favs.length == 0 ? (
            <p className="text-white center">
              No Favorite Movies Available Yet
            </p>
          ) : (
            <div className="col-sm-12">
              {props.favMovies.favs.map((movie, i) => {
                return (
                  <Movie
                    key={i}
                    viewDetails={props.viewDetails}
                    favButton={props.favButton}
                    fav={props.fav}
                    movieId={movie.id}
                    image={movie.image}
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

export default FavoriteList;
