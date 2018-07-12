import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const JobTile = (key, val, idx) => {
  const {
    _id,
    location,
    url,
    logo_url,
    description,
    progress_stage,
    note,
    title,
    company_name,
    post_date,
    last_update
  } = val;

  return (
    <Draggable key={key} draggableId={key} index={idx}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}>
          <p key={val._key} progress={val.progress_stage}>
            Company Name: {val.company_name}
            Job Title: {val.title}
            Job Website: <a href={val.url}>{val.url}</a>
            Location: {val.location}
            Posted on: {val.post_date}
          </p>
        </div>
      )}
    </Draggable>
  )
};

export default JobTile;
