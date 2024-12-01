import { Handle, Position } from '@xyflow/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupModal from '../Modal/GroupsModals';
import { useState } from 'react';


 
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
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="target" position={Position.Right} isConnectable={isConnectable} />
      <div className="button">
        
        <GroupModal
          open={isModalOpen} 
          onClose={handleCloseModal} 
          setItem={setItem} 
        />
        {selectedItem ? 
          <div className="selected-item">
            <Typography variant="h6">{`${selectedItem.name}`}</Typography>
          </div>
        : <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Open Modal
          </Button>}
      </div>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Left} id="c" style={{ top: 50 }} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} id="d" style={{ top: 50 }} isConnectable={isConnectable} />
    </div>
  );
}

export default GroupNode;