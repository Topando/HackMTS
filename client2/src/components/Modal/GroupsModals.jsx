// src/components/CustomModal.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
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

const GroupModal = ({ open, onClose, setItem }) => {
  const dispatch = useDispatch();
  const { departments  = [] } = useSelector((state) => state.departments || {});

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  console.log(departments)
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <div className="modal-inside">
        {departments.results ? (
            departments.results.map((item) => (
              <button
                key={item.id}
                className="modal-item-button"
                onClick={() => {
                  setItem(item);
                  onClose();
                }}
              >
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </button>
            ))
          ) : (
            <Typography variant="body1">Loading...</Typography>
          )}
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default GroupModal;