import { Handle, Position } from '@xyflow/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupModal from '../Modal/GroupsModals';
import { useState } from 'react';
import CreateGroupModel from '../Modal/CreateGroupModal'

 
function GroupNode({ isConnectable }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCreateGroupModalOpen, setCreateGroupModalOpen] = useState(false);
  const [selectedItem, setItem] = useState("");
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  const handleOpenCreateGroupModal = () => {
    setCreateGroupModalOpen(true);
  };

  const handleCloseCreateGroupModal = () => {
    setCreateGroupModalOpen(false);
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
        <CreateGroupModel
          open={isCreateGroupModalOpen}
          onClose={handleCloseCreateGroupModal}
          setItem={setItem}
        />
        {selectedItem ? 
          <div className="selected-item">
            <Typography variant="h6">{`${selectedItem.name}`}</Typography>
          </div>
        : <div>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Выбрать отдел
          </Button>
          <Button variant="contained" color="primary" onClick={handleOpenCreateGroupModal}>
            Создать отдел
          </Button>
          </div>}
      </div>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Left} id="c" style={{ top: 50 }} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} id="d" style={{ top: 50 }} isConnectable={isConnectable} />
    </div>
  );
}

export default GroupNode;