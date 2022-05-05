import { Tooltip, IconButton, Button, Typography, Modal, Box, TextField, Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { editDescription, findPhoto, removePhoto } from "../features/my-photos/myPhotosSlice";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  display: "grid",
  gap: 2
};
const styleBtn = {
  position: "absolute",
  right: 0
};

export const EditText = (props) => {
  const photo = useSelector(findPhoto(props.id));
  const dispatch = useDispatch();
  const handleEdit = () => {
    const payload = { description: editTerm, id: props.id };
    dispatch(editDescription(payload));
    props.onClose();
  };
  const [editTerm, setEditTerm] = useState("");
  const handleChange = (e) => setEditTerm(e.target.value);
  useEffect(() => setEditTerm(photo.description || ""), []);

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{ fontWeight: "bold" }}>Edit the description of the image</Typography>
        <TextField multiline={true} type="text" value={editTerm} onChange={handleChange} />
        <Button variant="contained" onClick={handleEdit}>Save</Button>
        <Tooltip title="Close">
          <IconButton sx={styleBtn} aria-label="close" onClick={props.onClose} > <CloseIcon /></IconButton>
        </Tooltip>
      </Box>
    </Modal>
  );
};
export const RemoveModal = (props) => {
  const photo = useSelector(findPhoto(props.id));
  const dispatch = useDispatch();
  const handleClickRemove = () => {
    console.log(props.id);
    dispatch(removePhoto(props.id));
    props.onClose();
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{ fontWeight: "bold" }}>Are you sure you want to remove this photo?</Typography>
        <Avatar sx={{ width: 75, height: 75, margin: "4px auto" }} src={photo.urls.thumb} alt={photo.alt_description} variant="square" />
        <Box sx={{ margin: "0 auto" }}>
          <Button onClick={() => props.onClose()}>No</Button>
          <Button variant="contained" onClick={() => handleClickRemove()}>Yes</Button>
        </Box>
        <Tooltip title="Close">
          <IconButton sx={styleBtn} aria-label="close" onClick={props.onClose} > <CloseIcon /></IconButton>
        </Tooltip>
      </Box>
    </Modal>
  );
};
