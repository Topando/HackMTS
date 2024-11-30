import React, { useCallback, useState, useEffect, useMemo } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import './index.css';
import '@xyflow/react/dist/style.css'
import ButtonNode from './CustomNode';
import GroupNode from './GroupNode'


const initialNodes = [
    {
      id: 'node-1',
      type: 'buttonUpdater',
      position: { x: 0, y: 0 },
    },
  ];
const initialEdges = [{ id: 'e1-2', source: '1', target: '1' }];
const nodeTypes =  { buttonUpdater: ButtonNode, groupUpdater: GroupNode};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const addNode = () => {
    const newNodeId = (nodes.length + 1).toString();
    const newNode = {
      id: newNodeId,
      position: { x: Math.random() * 400, y: Math.random() * 400 }, 
      data: { label: newNodeId },
      type: 'buttonUpdater'
    };
    setNodes((nds) => nds.concat(newNode));
  };
  const addGroupNode = () => {
    const newNodeId = (nodes.length + 1).toString();
    const newNode = {
      id: newNodeId,
      position: { x: Math.random() * 400, y: Math.random() * 400 }, 
      data: { label: newNodeId },
      type: 'groupUpdater'
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <>
      <div className='sideUtilBar'>
        <div className='circle' onClick={addNode}>Create Employee Diagram</div>
        <div className='circle' onClick={addGroupNode}>Create Team Diagram</div>
        <div className='circle'>Cursor</div>
        <div>4</div>
      </div>

      <div style={{ width: '100vw', height: '90vh', display: 'flex' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          
        />
      </div>
    </>
  );
}