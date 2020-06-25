import React from "react";
import { useHistory } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function ProfileBar(props) {
  const classes = useStyles();
  const history = useHistory();

  const btnLogout = () => {
    let path = `/login`;
    history.push(path);
  };

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        Hi, {props.userName} !
        <Button color="inherit" onClick={btnLogout}>
          Logout
        </Button>
      </Typography>
    </div>
  );
}
