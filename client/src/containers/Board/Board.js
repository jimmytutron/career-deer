import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// import ProgressTile from './ProgressTile';
import ProgressTile from '../../components/ProgressTile/ProgressTile';

// Redux Stuff
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {
  // defaultLocation,
  // newLocation,
  grabJobs
} from './actions';



// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

/**
 * Moves an item from one list to another list.
 */
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
  };


  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: 'items',
    droppable2: 'selected'
  };

  // this.props.boards[this.id2list[id]]
  // can be either..
  // this.props.boards['items']
  // this.props.boards['selected']
  getList = id => this.props.boards[this.id2List[id]];


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
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let status = { items }; // looks like { items: [ { id: <string?>, content: <string?> }, {} .. ] }

      // Make this into a dynamic check for all droppables
      if (source.droppableId === 'droppable2') {
        status = { selected: items };
      }
      //this may or may not be the default
      this.props.defaultLocation(status);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.props.newLocation({
        items: result.droppable,
        selected: result.droppable2
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>Hey man!</div>
        <DragDropContext onDragEnd={this.onDragEnd} >
          <ProgressTile
            boards={this.props.boards}
          />
        </DragDropContext>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    boards: state.boards
  }
}

const mapActionsToProps = () => ({
  grabJobs
});

// Put the things into the DOM!
export default connect(mapStateToProps, mapActionsToProps())(Board);
