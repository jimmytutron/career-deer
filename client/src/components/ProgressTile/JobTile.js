import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const cardStyles = {
  width: '250px',
  minHeight: '250px',
}

const cardHeadingStyle = {
  color: '#5869A7'
}

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   // change background colour if dragging
//   background: isDragging ? 'lightgreen' : 'white',

//   // styles we need to apply on draggables
//   ...draggableStyle
// });

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
    <Draggable key={key} draggableId={key} index={idx}>
      {(provided, snapshot) => (
      <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
        <Card 
        key={job._key} 
        progress={job.progress_stage}
        className="mb-2 mx-auto" 
        style={cardStyles}>
            <CardContent>
                <Typography className="pt-2" color="textSecondary">
                {job.company_name}
                </Typography>
                <Typography variant="headline" component="h2" style={cardHeadingStyle}>
                {job.title}
                </Typography>
                <Typography color="textSecondary">
                {job.post_date}
                </Typography>
                <Typography component="p">
                {job.location}
                </Typography>
            </CardContent>
            <CardActions>
                  <Button size="small" variant="contained" color="primary">
                  <i className="fas fa-pen-square"></i> &nbsp; Edit
                  </Button>
                <Button size="small" variant="contained" color="secondary">View on Tracker</Button>
            </CardActions>
        </Card>
      </div>
      )}
    </Draggable>
  )
};

export default JobTile;
