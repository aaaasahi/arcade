import React from "react";
import { useState } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(() => ({
  text: {
    marginBottom: '10px',
  },
}));

export const CreateCommunityDialog = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState(undefined);
  const { open, handleClickOpen, handleClose } = props;
  const classes = useStyles();
  const history = useHistory();

  const selectFile = (e) => {
    const selectedImage = e.target.files[0];
    const setPreview = URL.createObjectURL(e.target.files[0]);
    setImage(selectedImage);
    setPreviewImage(setPreview);
  };

  const createFormData = () => {
    let formData = new FormData();
    formData.append("community[name]", name);
    formData.append("community[description]", description);
    formData.append("community[image]", image);
    return formData
  }

  const upload = async() => {
    const url =  'http://localhost:8000/api/communities'
    const data = await createFormData() 
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      headers: JSON.parse(localStorage.user),
    }
    axios.post(url, data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
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
        <div>
          <label>
            <input type="file" accept="image/*" onChange={selectFile} />
          </label>
        </div>

        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" width={200} />
          </div>
        )}
          <TextField
            label="コミュニティ名(必須)"
            type="text"
            fullWidth
            className={classes.text}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="コミュニティ説明(必須)"
            type="text"
            multiline={true}
            rows={5}
            fullWidth
            className={classes.text}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            やめる
          </Button>
          <Button onClick={upload} variant="outlined">
            作成
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
