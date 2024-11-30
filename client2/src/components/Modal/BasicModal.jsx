// src/components/CustomModal.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/slices/modalSlice'; // Adjust the path as necessary
import { fetchData } from '../../features/slices/dataSlice';
import { useEffect } from 'react';

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

const CustomModal = ({setItem}) => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.modal);
  const { items = []} = useSelector((state) => state.data || {});
  
  const handleClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <div className="modal-inside">
          {items.map((item) => (
            <button
              key={item.id}
              className="modal-item-button"
              onClick={() => setItem(item)}
            >
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">{item.surname}</Typography>
            </button>
          ))}             
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};


export default CustomModal;