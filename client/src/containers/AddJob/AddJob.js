// import React, { Component } from 'react';
// import AddJobForm from '../../components/AddJobForm/AddJobForm';
// import { Container, Col, Row } from '../../components/Grid';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addjob } from './actions';

// class AddJob extends Component {
//   addJob = values => {
//     // This calls the addJob action creator, passing the form values to it 
//    this.props.addJob(values);
//   }
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col />
//           <Col size="12 md-8 lg-6" className="banana">
//             <AddJobForm onSubmit={this.addJob} />
//           </Col>
//           <Col />
//         </Row>
//       </Container>
//     )
//   }
// };

// const mapStateToProps = (state,props) => {
//   return { 
//     addJob: state.addJob
//   }
// };

// const mapActionsToProps = (dispatch,props) => {
//   return bindActionCreators({
//     addJob
//   }, dispatch);
// }

// export default connect(mapStateToProps,mapActionsToProps)(AddJob);
