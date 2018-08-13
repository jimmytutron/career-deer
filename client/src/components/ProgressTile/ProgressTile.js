import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import JobTile from './JobTile';
import './ProgessTile.css';


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? '#1670bd' : '#e3edf6',
  width: '270px',
  minHeight: '300px',
  maxHeight: '70vh',
  boxShadow: '0px 0px 1px #fff',
  padding: '10px',
  borderRadius: '10px',
  overflow: 'auto'
});

class ProgressTile extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.name} key={"board-" + this.props.name}>
        {(provided, snapshot) => (
          <div className="mb-5 mx-1 inline">
            <h3 className="text-center text-uppercase montserrat">{this.props.name}</h3>
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
              {
                this.props.jobsList.map((val, idx) => {
                  return (
                    JobTile(`${this.props.name}-job-${idx}`, val, idx, this.props.updateJob, () => {
                      this.props.deleteJob(val._id, this.props.jobsList, this.props.name)
                    })
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
}

export default ProgressTile;
