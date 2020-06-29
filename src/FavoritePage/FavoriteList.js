import React from "react";
import Movie from "../HomePage/Movie";

const FavoriteList = (props) => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "250px" }}>
        <div className="col-sm-12">
          {props.favMovies.favs.length == 0 ? (
            <p className="text-white center">No Favorite Movies Available</p>
          ) : (
            <div className="col-sm-12">
              {props.favMovies.favs.map((movie, i) => {
                return (
                  <div key={i}>
                    {props.favMovies.rate.map((rating, j) => {
                      return (
                        <>
                          {movie.id == rating.id ? (
                            <Movie
                              key={j}
                              viewDetails={props.viewDetails}
                              unfavButton={props.unfavButton}
                              fav={props.fav}
                              flagFav={true}
                              movieId={movie.id}
                              image={movie.image}
                              title={movie.title}
                              overview={movie.overview}
                              rating={movie.id == rating.id ? rating.rating : 0}
                            />
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </div>
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
