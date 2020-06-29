import React, { useState } from "react";
import { useSelector } from "react-redux";
import Rating from "@material-ui/lab/Rating";

import Button from "./Button";
import Modal from "../ModalRating/Modal";
import "./movieCard.css";

const Movie = (props) => {
  const [show, setShow] = useState(false);
  const rate = useSelector((state) => state.movieReducer);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="col s12 m4 l3">
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
            <h5 className="mt-1">
              <b>{props.title}</b>
            </h5>
            <p className="m-0" style={{ textAlign: "justify" }}>
              {props.overview}
            </p>

            {props.flagFav ? (
              <>
                <Rating name="read-only" value={props.rating} readOnly />
                <Button
                  text={"Remove Favorite"}
                  click={() =>
                    props.unfavButton({
                      id: props.movieId,
                    })
                  }
                />
              </>
            ) : (
              <>
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
                  <Button text={"Give Your Ratings"} click={showModal} />
                  <Modal
                    show={show}
                    handleClose={hideModal}
                    id={props.movieId}
                    title={props.title}
                    overview={props.overview}
                    image={props.image}
                  />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
