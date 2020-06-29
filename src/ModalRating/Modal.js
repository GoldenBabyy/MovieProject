import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";

import Button from "../HomePage/Button";
import {
  ratingStarAction,
  favoriteMovieAction,
} from "../_actions/movie.actions";
import "../ModalRating/modal.css";

const Modal = (props) => {
  const showHide = props.show ? "modal display-block" : "modal display-none";
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const onStarClick = (newRating) => {
    let rating = {
      id: props.id,
      rating: newRating,
    };
    let movie = {
      id: props.id,
      title: props.title,
      overview: props.overview,
      image: props.image,
    };
    dispatch(ratingStarAction(rating));
    dispatch(favoriteMovieAction(movie));
    setRating(newRating);
  };

  return (
    <div className={showHide}>
      <section className="modal-main">
        <StarRatings
          className="Rating"
          name={props.id}
          rating={rating}
          starDimension="20px"
          starSpacing="1px"
          starEmptyColor="rgb(109, 122, 130)"
          starRatedColor="#FFD700"
          numberOfStars={5}
          changeRating={onStarClick}
        />
        <button className="ml-3" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
