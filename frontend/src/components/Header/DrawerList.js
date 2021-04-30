import React, { useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import EventIcon from "@material-ui/icons/Event";
import ForumIcon from "@material-ui/icons/Forum";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export const DrawerList = (props) => {
  const { open, handleDrawerToggle } = props;
  const classes = useStyles();
  const history = useHistory();

  const onClickCommunity = useCallback(() => history.push("/community"), []);
  const onClickEvent = useCallback(() => history.push("/event"), []);
  const onClickProfile = useCallback(() => history.push("/profile"), []);

  const handleSignOut = function (e) {
    e.preventDefault();
    axios({
      method: "DELETE",
      url: "http://localhost:8000/auth/sign_out",
      data: JSON.parse(localStorage.user),
    }).then(() => {
      localStorage.removeItem("user");
      window.location = "/login";
    });
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      onClick={handleDrawerToggle}
    >
      <List className={classes.list}>
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
  );
};
