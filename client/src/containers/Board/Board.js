import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ProgressTiles from '../../components/ProgressTiles/ProgressTiles';

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
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
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
  getList = id => this.props.boards[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let status = { items };

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

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <React.Fragment>
        <div>Hell World!</div>
      {/* <DragDropContext onDragEnd={this.onDragEnd} >
        <ProgressTiles
          items={this.props.allJobs}
          selected={this.props.boards.selected}
        />
      </DragDropContext> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    boards: state.boards
  }
}

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators({
//     grabJobs
//   }, dispatch)
// }

const mapActionsToProps = () => ({
  grabJobs
});

// Put the things into the DOM!
export default connect(mapStateToProps, mapActionsToProps())(Board);
