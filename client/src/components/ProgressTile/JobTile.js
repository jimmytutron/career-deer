import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { Link } from "react-router-dom";
import { selectUpdateJob } from '../../containers/UpdateJob/actions';

const cardStyles = {
  width: '250px'
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

const JobTile = (key, job, idx, selectUpdateJob, deleteJob) => {
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
          {...provided.dragHandleProps}>
        <Card 
        key={job._key} 
        progress={job.progress_stage}
        className="mb-2 mx-auto" 
        style={cardStyles}>
            <CardContent>
            <IconButton
            className="float-right delete-icon"
            // onClick={() => selectUpdateJob(job)}
            >
            <i className="fas fa-times"></i>
            </IconButton>
                <Typography className="pt-2" color="textSecondary">
                {job.company_name}
                </Typography>
                <Typography variant="headline" component="h2" style={cardHeadingStyle}>
                {job.url ? <a className="job-link" href={job.url} target="_blank">{job.title}</a> : job.title}
                </Typography>
                <Typography color="primary">
                {job.location}
                </Typography>
                <Typography className="my-1" color="textSecondary">
                Notes
                <br />
                </Typography>
                
                {job.note 
                  ? job.note.map((element, i) => {
                      return (
                        <Typography key={'note-' + i} className="note my-2" component="p">
                        {element || 'no notes yet...'}
                        </Typography>
                        )
                    }) 
                  : null}
                
            </CardContent>
            <CardActions className="float-right button-margin">
                <Link to="/updatejob">
                <Tooltip id="tooltip-icon" title="Edit this job" placement="left">
                  <Button size="small" variant="contained" color="secondary" onClick={() => selectUpdateJob(job)}>
                  <i className="fas fa-pen"></i>
                  </Button>
                </Tooltip>
                </Link>
            </CardActions>
        </Card>
      </div>
      )}
    </Draggable>
  )
};

export default JobTile;
