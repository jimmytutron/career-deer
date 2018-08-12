import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Col } from '../../components/Grid';
import JobTile from './JobTile';
import './ProgessTile.css';


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? '#1670bd' : '#e3edf6',
  width: '270px',
  minHeight: '300px',
  maxHeight: '70vh',
  boxShadow: '0px 0px 1px #fff',
  padding: '10px',
  borderRadius: '10px',
  overflow: 'auto'
});

const ProgressTile = (key, jobs, selectUpdateJob) => {
  // console.log(key,'PDROPPABrogress Tile Keys');
  // console.log(jobs, 'Progress tile jobs');
  return (
  <Droppable droppableId={key} key={key}>
    {(provided, snapshot) => (
      <div className="mb-5 mx-1 inline">
        <h3 className="text-center text-uppercase montserrat">{key}</h3>
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}>
          {
            Object.entries({ ...jobs }).map(([key, val], idx) => {
              return (
                JobTile(key, val, idx, selectUpdateJob)
              )
            })
          }
           {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
  )
}

export default ProgressTile;
