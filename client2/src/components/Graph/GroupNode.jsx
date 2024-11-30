import { Handle, Position } from '@xyflow/react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupModal from '../Modal/GroupsModals';
import { useState } from 'react';
const handleStyle = { left: 10 };
 
function GroupNode({ isConnectable }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setItem] = useState("");
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className="button">
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Open Modal
        </Button>
        <GroupModal
          open={isModalOpen} 
          onClose={handleCloseModal} 
          setItem={setItem} 
        />
        {selectedItem && (
          <div className="selected-item">
            <Typography variant="h6">{`${selectedItem.name}`}</Typography>
            <Typography variant="body1">{selectedItem.surname}</Typography>
            <Typography variant="body1">{selectedItem.department}</Typography>
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default GroupNode;