import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { createDepartment, getDepartments } from '../../features/slices/departmentsSlice';

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
  const { departments = [] } = useSelector((state) => state.departments || {});

  const [newDepartment, setNewDepartment] = useState({
    name: '',
    description: '',
    parent_department: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment({
      ...newDepartment,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!newDepartment.name || !newDepartment.description) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      setItem(newDepartment);
      await dispatch(createDepartment(newDepartment));
      
      onClose(); 
    } catch (error) {
      console.error('Error creating department:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={style}>
        <div className="modal-inside">
          <div className="create-department-form">
            <Typography variant="h6">Create New Department</Typography>
            <form onSubmit={handleFormSubmit}>
              <div>
                <Typography variant="body2">Department Name</Typography>
                <input
                  type="text"
                  name="name"
                  value={newDepartment.name}
                  onChange={handleInputChange}
                  placeholder="Enter department name"
                  required
                />
              </div>

              <div>
                <Typography variant="body2">Description</Typography>
                <textarea
                  name="description"
                  value={newDepartment.description}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                  required
                />
              </div>

              <div>
                <Typography variant="body2">Parent Department (Optional)</Typography>
                <select
                  name="parent_department"
                  value={newDepartment.parent_department}
                  onChange={handleInputChange}
                >
                  <option value="">None</option>
                  {departments.results ? departments.results.map((dep) => (
                    <option key={dep.id} value={dep.id}>
                      {dep.name}
                    </option>
                  )) : <></>}
                </select>
              </div>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? 'Submitting...' : 'Create Department'}
              </Button>
            </form>
          </div>

          <Button onClick={onClose} color="primary" fullWidth>
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default GroupModal;
