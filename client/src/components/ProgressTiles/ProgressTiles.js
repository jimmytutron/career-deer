// import React from 'react';
// // Remove Draggable from here!
// import { Droppable, Draggable } from 'react-beautiful-dnd';
// import Progress from './Progress';

// const grid = 8;

// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: grid,
//   width: 250
// });

// /**
//  * Returns a collection of dynamically gernerated droppables using map
//  * @param  {Aray} {boardKeys}
//  * @param {Object} {boards}
//  */
// const ProgressTiles = ({ boards, boardKeys }) => {
//   return (
//     <React.Fragment>
//       {
//         Array.from(boards).map(key => (
//           <Droppable droppableId={key} key={key}>
//             {
//               Progress()
//             }
//           </Droppable>
//         ))
//       }
//       {/* <Droppable droppableId="droppable">
//       {(provided, snapshot) => (
//         <div
//           ref={provided.innerRef}
//           style={getListStyle(snapshot.isDraggingOver)}>
//           {
//             items.map((item, index) => (

//               <Draggable
//                 key={item.id}
//                 draggableId={item.id}
//                 index={index}>
//                 {
//                   (provided, snapshot) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={getItemStyle(
//                         snapshot.isDragging,
//                         provided.draggableProps.style
//                       )}>
//                       {item.content}
//                     </div>
//                   )
//                 }
//               </Draggable>

//             ))
//           }
//           {provided.placeholder}
//         </div>
//       )}
//     </Droppable> */}

//       {/* <Droppable droppableId="droppable2">
//       {(provided, snapshot) => (
//         <div
//           ref={provided.innerRef}
//           style={getListStyle(snapshot.isDraggingOver)}>
//           {selected.map((item, index) => (
//             <Draggable
//               key={item.id}
//               draggableId={item.id}
//               index={index}>
//               {(provided, snapshot) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   style={getItemStyle(
//                     snapshot.isDragging,
//                     provided.draggableProps.style
//                   )}>
//                   {item.content}
//                 </div>
//               )}
//             </Draggable>
//           ))}
//           {provided.placeholder}
//         </div>
//       )}
//     </Droppable> */}
//     </React.Fragment>
//   )
// }

// export default ProgressTiles;
