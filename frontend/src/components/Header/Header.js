import React, { useCallback, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import EventIcon from "@material-ui/icons/Event";
import ForumIcon from "@material-ui/icons/Forum";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback((event)=>{
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")){
      return;
    }
    setOpen(!open)
  },[setOpen, open]);

  const onClickCommunity = useCallback(() => history.push("/community"), []);
  const onClickEvent = useCallback(() => history.push("/event"), []);
  const onClickProfile = useCallback(() => history.push("/profile"), []);

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
    <>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon button onClick={handleDrawerToggle}/>
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
      <>
        <Drawer
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
        >
          <List className={classes.list} onClick={handleDrawerToggle}>
            <ListItem button onClick={onClickCommunity}>
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText>コミュニティ</ListItemText>
            </ListItem>
            <ListItem button onClick={onClickEvent}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText>イベント</ListItemText>
            </ListItem>
            <ListItem button onClick={onClickProfile}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>プロフィール</ListItemText>
            </ListItem>
            <ListItem button onClick={handleSignOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>ログアウト</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </>
    </>
  );
};
