import React, { useState, memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import Button from '@mui/material/Button';
import CustomModal from '../Modal/BasicModal';

function ButtonNode({ isConnectable}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setItem] = useState("");

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      
      <div className="button">
       
        <CustomModal 
          open={isModalOpen} 
          onClose={handleCloseModal} 
          setItem={setItem} 
        />
        {selectedItem ? 
          <a href={`http://localhost:3001/users/${selectedItem?.id}`} target="_blank" rel="noopener noreferrer">
            
              <div className="flex">
              <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
              
              </div>
              <div className="ml-2">
                {`${selectedItem.name}`}
                <div className="text-lg font-bold">{selectedItem.surname}</div>
                <div className="text-gray-500">{selectedItem.department_id_name.name}</div>
              </div>
            </div>
          </a> :  <Button variant="contained" color="primary" onClick={handleOpenModal}>
                    Выбрать сотрудника
                  </Button>
          }
        
      </div>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-16 !bg-teal-500" />
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="w-16 !bg-teal-500" />
      <Handle type="target" position={Position.Right} isConnectable={isConnectable} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Left} id="c" style={{ top: 50 }} isConnectable={isConnectable} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Right} id="d" style={{ top: 50 }} isConnectable={isConnectable} className="w-16 !bg-teal-500" />
    </div>
  );
}
export default ButtonNode