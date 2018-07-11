import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import JobTile from './JobTile';

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid, 
  width: 250
});

const Progress = (jobs) => {
  // console.log(key,'key');
  return (
    (provided, snapshot) => {
      // console.log(key,val);
      return (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}>
          {
            Object.entries({...jobs}).map(([ key, val ]) => {
              return (
                <div key={key}>{val.company_name}</div>
              )
            })
          }
        </div>
      )
    }
  )
};

export default Progress;
