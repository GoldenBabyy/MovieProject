import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import BarMenu from "./MenuBar";
import TitleBar from "./TitleBar";
import ProfileBar from "./ProfileBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#ff1744",
    position: "static",
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <BarMenu
          userName={props.userName}
          viewDetails={props.viewDetails}
          favButton={props.favButton}
          unfavButton={props.unfavButton}
          menu={props.menu}
        />
        <TitleBar menu={props.menu} />
        <ProfileBar userName={props.userName} />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
