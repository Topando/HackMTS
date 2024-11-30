// src/components/CustomModal.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeGroupsModal } from '../../features/slices/modalForGroups'; // Adjust the path as necessary
import { getDepartments } from '../../features/slices/departmentsSlice'
import { useEffect } from 'react';''
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
  const { open, content } = useSelector((state) => state.modalGr)

  const handleClose = () => {
    dispatch(closeGroupsModal());
  };


  return (
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