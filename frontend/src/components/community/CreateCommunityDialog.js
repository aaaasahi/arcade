import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  text: {
    marginBottom: '10px',
  },
}));

export const CreateCommunityDialog = (props) => {
  const { open, handleClickOpen, handleClose } = props;
  const classes = useStyles();


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Community
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">コミュニティ追加</DialogTitle>
        <DialogContent>
          <TextField
            label="コミュニティ名(必須)"
            type="title"
            fullWidth
            className={classes.text}
          />
          <TextField
            label="コミュニティ説明(必須)"
            type="text"
            multiline={true}
            rows={5}
            fullWidth
            className={classes.text}
          />
          <input type="file" accept="image/*" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            やめる
          </Button>
          <Button onClick={handleClose} color="primary">
            作成
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
