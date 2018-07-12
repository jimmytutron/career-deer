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
          {
            Object.entries({ ...val })
              .filter((tupe) => (
                (tupe[0] !== 'note') || (tupe[0] !== 'logo_url') ||
                (tupe[0] !== 'description') || (tupe[0] !== 'last_update')
              ))
              .map(([ key, val ]) => {
                const data = { [key]: val }
                console.log(data);
                console.log('========');
                return (
                  <p key={key} id={data._id} progress={data.progress_stage}>
                    Company Name: {data.company_name}
                    Job Title: {data.title}
                    Job Website: <a href={data.url}>{data.url}</a>
                    Location: {data.location}
                    Posted on: {data.post_date}
                  </p>
                )
              })
          }
        </div>
      )}
    </Draggable>
  )
};

export default JobTile;
