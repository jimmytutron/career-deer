import React from 'react';
// import JobTile from './JobTile';

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

const Progress = () => (
  (provided, snapshot) => (
    <div
      ref={provided.innerRef}
      style={getListStyle(snapshot.isDraggingOver)}>
      {/* {
        boards.map((item, index) => (
          // <Draggable
          //   key={item._id}
          //   draggableId={item.company_name}
          //   index={index}>
          //   <JobTile item={item} />
          // </Draggable>
          index
        ))
      } */}
      hello
    </div>
  )
);

export default Progress;
