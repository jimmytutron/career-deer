import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Col } from '../../components/Grid';
import JobTile from './JobTile';
import './ProgessTile.css';


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'white',
  height: '100vh',
  boxShadow: '0px 0px 1px #5B5B5B',
  padding: '10px',
  borderRadius: '10px',
  overflow: 'scroll'
});

const ProgressTile = (key, jobs) => (
  <Droppable droppableId={key} key={key}>
    {(provided, snapshot) => (
      <Col size="12 md-4 lg-2" className="mb-5">
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
      </Col>
    )}
  </Droppable>
)

export default ProgressTile;
