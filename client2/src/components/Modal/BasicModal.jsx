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

const CustomModal = () => {
  const dispatch = useDispatch();
  const { open, content } = useSelector((state) => state.modal); // Access modal state

  const handleClose = () => {
    dispatch(closeModal());
  };

  const { items = [], loading, error } = useSelector((state) => state.data || {});
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  return (
    //Сделать чтобы список высвечивался в столбик, также заредезайнить кнопки
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      
      <Box sx={style}>
      <div className='modal-inside'>
        
        {items.map((item) => (
            <>
            <button >
              <div className='typo'>
                <Typography id="modal-title" variant="h6" component="h2" >
                  {item.name}
                </Typography>
              </div>
              <div className='typo'>
                <Typography id="modal-description">
                  {item.surname}
                </Typography>
              </div>
            </button>
            </>
          ))}
          
          <Button onClick={handleClose} color="primary">Close</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;