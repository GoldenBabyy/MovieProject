import React from "react";
import { FavoritePage } from "./FavoritePage";

const FavoriteList = (props) => {
  console.log(props);

  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "250px" }}>
        <div className="col-sm-12">
          {props.map((movie, i) => {
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
      </div>
    </div>
  );
};

export default FavoriteList;
