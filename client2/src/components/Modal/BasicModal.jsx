import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/slices/dataSlice';
import { useEffect } from 'react';
import "./basicModal.css"
import Logo from '../../assets/close.svg?react';
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

const CustomModal = ({ open, onClose, setItem }) => {
  const dispatch = useDispatch();
  const { items = [] } = useSelector((state) => state.data || {});

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className='section__modal_window'
    >
      <Box sx={style} className="modal_window">
        <div className="container">
          <div className="modal__close" onClick={onClose}>
            <Logo></Logo>
          </div>
          <div className="modal__content">
          {items.map((item) => (
            <button
              key={item.id}
              className="modal__block"
              onClick={() => {
                setItem(item);
                onClose();
              }}
              
            >
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">{item.surname}</Typography>
            </button>
          ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;