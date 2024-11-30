// src/components/CustomModal.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/slices/modalSlice'; // Adjust the path as necessary

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomModal = () => {
  const dispatch = useDispatch();
  const { open, content } = useSelector((state) => state.modal); // Access modal state

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {content?.title || "Default Title"}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {content?.description || "Default Description"}
        </Typography>
        <Button onClick={handleClose} color="primary">Close</Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;