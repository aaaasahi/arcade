import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

export const Header = () => {
  const classes = useStyles();
  const currentUser = localStorage.getItem("user");
  const handleSignOut = function (e) {
    e.preventDefault();
    axios({
      method: "DELETE",
      url: "http://localhost:3000/auth/sign_out",
      data: JSON.parse(localStorage.user),
    }).then(() => {
      localStorage.removeItem("user");
      window.location = "/";
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Arcade
          </Typography>
          <div>
            {currentUser ? (
              <>
                {JSON.parse(currentUser).uid}
                <a href="#" onClick={handleSignOut}>
                  Sign out
                </a>
              </>
            ) : (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/login" style={{ padding: "10px" }}>
                  Login
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
