import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Progress from './Progress';

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

/**
 * Returns a collection of dynamically gernerated droppables using map
 * @param  {Aray} {boardKeys}
 * @param {Object} {boards}
 */
class ProgressTiles extends Component {

  render() {
    return (
      <React.Fragment>
        {
          // array of tuples looks like [ [key,val], [key, val] ]
          // key: is the string representing the job status which matches the board's key names
          // e.g. 'saved', 'applied', 'on_site' ...

          // val: is the array of job objects corresponding to that status
          Object.entries({ ...this.props.boards }).map(([key, val]) => (
            <Droppable droppableId={key} key={key}>
              {
                Progress(val)
              }
            </Droppable>
          ))
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { boards } = ownProps;
  return {
    boards
  }
};

export default connect(mapStateToProps)(ProgressTiles);
