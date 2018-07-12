import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Col } from '../../components/Grid';
import JobTile from './JobTile';
import './ProgessTile.css';


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : '#E7EAF2',
  width: '300px',
  boxShadow: '0px 0px 1px #5B5B5B',
  padding: '10px',
  borderRadius: '10px',
  overflow: 'scroll'
});

const ProgressTile = (key, jobs) => {
  // console.log(key,'PDROPPABrogress Tile Keys');
  // console.log(jobs, 'Progress tile jobs');
  return (
  <Droppable droppableId={key} key={key}>
    {(provided, snapshot) => (
      <div className="mb-5 mx-2">
        <h1 className="text-center text-uppercase montserrat">{key}</h1>
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}>
          {
            Object.entries({ ...jobs }).map(([key, val], idx) => {
              return (
                JobTile(key, val, idx)
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
