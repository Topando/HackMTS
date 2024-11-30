import { Handle, Position } from '@xyflow/react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../features/slices/modalSlice';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomModal from '../Modal/BasicModal';
import { useState } from 'react';
const handleStyle = { left: 10 };
 
function ButtonNode({ isConnectable }) {
  const dispatch = useDispatch();
  const [selectedItem, setItem] = useState("");
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleSetItem = (item) => {
    setItem(item);
  }
  // Сделать верстку для диаграм, возможно добавить фотографии
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className="button">
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Open Modal
        </Button>
        <CustomModal setItem={handleSetItem}/>
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
 
export default ButtonNode;