import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { DrawerList } from "./DrawerList";
import { MenuIconButton } from "./MenuIconButton";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback(
    (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setOpen(!open);
    },
    [setOpen, open]
  );

  const currentUser = localStorage.getItem("user");

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <MenuIconButton handleDrawerToggle={handleDrawerToggle} />
            <Typography variant="h6" className={classes.title}>
              Arcade
            </Typography>
            <div>
              {currentUser ? (
                <>
                  {JSON.parse(currentUser).uid}
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
      <nav>
        <DrawerList open={open} handleDrawerToggle={handleDrawerToggle}/>
      </nav>
    </>
  );
};
