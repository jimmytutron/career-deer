import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// import ProgressTile from './ProgressTile';
import ProgressTile from '../../components/ProgressTile/ProgressTile';

// Redux Stuff
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {
  grabJobs,
  moveJob
} from './actions';


const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = [...source];
  const destClone = [...destination];
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class Board extends Component {

  componentDidMount() {
    console.log('Grabbing Jobs..');
    this.props.grabJobs();
    // this.props.boards;
  };


  getList = id => {
    return this.props.boards[id];
  }

  /**
   * Handles logic for draggables.
   * @param  {Object} result is an object with a bunch of properties, we only care about source & destination
   *         result ->  { 
   *              ** droppableId references the droppable you've moved a draggable to.**
   *              ** index references the numerical index within the droppable that you've moved a draggable to.
   *             source: { droppableId: <string>, index: <number> },
   *             destination: { droppableId: <string>, index: <number> }
   *           } 
   */
  onDragEnd = ({ source, destination }) => {
    // dropped outside the lists
    if (!destination) {
      return;
    }
    // If dropped back into its originating column/droppable, it will reorder if needed.
    if (
      source.droppableId === destination.droppableId &&
      source.index !== destination.index
    ) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
      this.props.moveJob(items, source.droppableId);
    }
    // Move across status columns
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      this.props.moveJob(null,null,result)
    }

  };

  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} >
        <React.Fragment>
          {
            Object.entries({ ...this.props.boards }).map(([key, val]) => (
              // returns a library's premade component --don't want each of the
              // library components nested in a component wrapper. This is what I'll call a
              // "component creator". It returns a component with different attributes, so we don't 
              // unnecessarily nest it in a pointless component wrapper.
              ProgressTile(key, val)
            ))
          }
        </React.Fragment>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    boards: state.boards
  }
}

const mapActionsToProps = () => ({
  grabJobs,
  moveJob
});

// Put the things into the DOM!
export default connect(mapStateToProps, mapActionsToProps())(Board);
