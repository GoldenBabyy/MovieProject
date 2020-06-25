import React from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const options = ["Home", "Favorite"];

export default function BarMenu(props) {
  console.log(props);
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (props) => {
    if (props.menu == "Home") history.push("/");
    else
      history.push({
        pathname: "/favorite",
        viewDetails: props.viewDetails,
        favButton: props.favButton,
        unfavButton: props.unfavButton,
        userName: props.userName,
      });
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === props.menu}
            onClick={() =>
              handleClose({
                menu: option,
                userName: props.userName,
                viewDetails: props.viewDetails,
                favButton: props.favButton,
                unfavButton: props.unfavButton,
              })
            }
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
