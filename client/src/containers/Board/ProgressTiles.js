import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Progress from '../../components/ProgressTiles/Progress';

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
    console.log(this.props.boards,"BOARDS");
    return (
      <React.Fragment>
        {
          // Convert the object into an array of tuples so we can use the Array method
          // "map" on it. Don't forget to spread it too, so we aren't mutating
          // array of tuples looks like [ [key,val], [key, val] ]
          [...Object.entries(...this.props.boards)].map((tuple) => (
            <Droppable droppableId={key} key={key}>
              {
                Progress()
              }
            </Droppable>
          ))
        }
        {/* <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}>
          {
            items.map((item, index) => (

              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}>
                {
                  (provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}>
                      {item.content}
                    </div>
                  )
                }
              </Draggable>

            ))
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { boards, boardKeys } = ownProps;
  return {
    boards
  }
};

export default connect(mapStateToProps)(ProgressTiles);
