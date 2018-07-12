import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import JobTile from './JobTile';

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

const ProgressTile = (key, jobs) => (
  <Droppable droppableId={key} key={key}>
    {(provided, snapshot) => (
      <div>
        <h1>{key}</h1>
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}>
          {
            Object.entries({ ...jobs }).map(([key, val], idx) => {
              // return (
              //   <div key={key}>{val.company_name}</div>
              // )
              return (
                // Another "component creator"
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

export default ProgressTile;
