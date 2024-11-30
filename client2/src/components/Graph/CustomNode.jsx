import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import BasicModal from '../Modal/BasicModal';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/slices/modalSlice';
import Button from '@mui/material/Button';
const handleStyle = { left: 10 };
 
function ButtonNode({ data, isConnectable }) {
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        dispatch(openModal({title: "Heelo", description: "dwqdwqd"}));
    };

  return (
    
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className='button'>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Open Modal
        </Button>
        <BasicModal></BasicModal>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}
 
export default ButtonNode;