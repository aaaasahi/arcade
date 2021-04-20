import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export const MenuIconButton = (props) => {
  const classes = useStyles();
  const { handleDrawerToggle } = props;
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </IconButton>
  );
};
