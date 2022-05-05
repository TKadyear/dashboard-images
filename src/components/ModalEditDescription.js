import { Button, Typography, Modal, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { editDescription, findPhoto } from "../features/my-photos/myPhotosSlice";
import { useState, useEffect } from "react";

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
        <Typography>Edit the description of the image</Typography>
        <input type="text" value={editTerm} onChange={handleChange} />
        <Button variant="contained" onClick={handleEdit}>Guardar</Button>
      </Box>
    </Modal>
  );
};
