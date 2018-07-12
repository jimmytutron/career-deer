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

const JobTile = (key, job, idx) => {
  // const {
  //   _id,
  //   location,
  //   url,
  //   logo_url,
  //   description,
  //   progress_stage,
  //   note,
  //   title,
  //   company_name,
  //   post_date,
  //   last_update
  // } = job;

  return (
    <Draggable key={key} draggableId={job._id} index={idx}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}>
          <p key={job._key} progress={job.progress_stage}>
            Company Name: {job.company_name}
            Job Title: {job.title}
            Job Website: <a href={job.url}>{job.url}</a>
            Location: {job.location}
            Posted on: {job.post_date}
          </p>
        </div>
      )}
    </Draggable>
  )
};

export default JobTile;
