import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import BarMenu from "./MenuBar";
import TitleBar from "./TitleBar";
import ProfileBar from "./ProfileBar";

const Nav = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <BarMenu
          userName={props.userName}
          viewDetails={props.viewDetails}
          favButton={props.favButton}
          unfavButton={props.unfavButton}
          menu={props.menu}
        />
        <TitleBar />
        <ProfileBar userName={props.userName} />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
