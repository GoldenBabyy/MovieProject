import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../logo.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function TitleBar(props) {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.title}>
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React logo"
      />
      {props.menu}
    </Typography>
  );
}
