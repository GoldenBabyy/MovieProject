import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Ratings } from "material-ui-rating";
import Ratings from "@material-ui/lab/Rating";
import { useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 400,
    display: "flex",
    alignItems: "center",
    color: "blue",
    fontWeight: "bold",
  },
});

export default function RatingStar(props) {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e, newValue, props) => {
    // dispatch(ratingStarAction(rating));
    console.log(props);
    setValue(newValue);
  };

  const onChangeActive = (e, newHover) => {
    setHover(newHover);
  };

  const handleSubmit = (id) => {
    console.log(id);
    let rating = {
      id: id,
      rating: value,
    };
    console.log(rating);
  };

  return (
    <div className={classes.root}>
      <Ratings
        name="hover-feedback size-large"
        size="small"
        value={value}
        precision={0.5}
        // onClick={handleSubmit(props.id)}
        onChange={(event, newValue) => {
          console.log(props.id);
          let rating = {
            id: props.id,
            rating: newValue,
          };
          dispatch(ratingStarAction(rating));
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
