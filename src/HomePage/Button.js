import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    float: "right",
    position: "relative",
  },
}));

export default function btnFavorite(props) {
  const classes = useStyles();
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    if (props.text == "See Details") {
      setClassNames("");
    } else {
      setClassNames(classes.btn);
    }
  }, [props.text]);

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classNames}
      onClick={props.click}
    >
      {props.text}
    </Button>
  );
}
