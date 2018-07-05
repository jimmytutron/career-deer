import React, { Component } from 'react';
// import API from '../../utils/API';
// import { Col, Container, Row } from '../../components/Grid';
import { Container } from '../../components/Grid';
// import { Nav } from '../../components/Nav';
// import { HomePageJumbo } from '../../components/HomePageJumbo';
// import { Card, CardBody, CardTitle, CardSubtitle, CardText } from '../../components/Card';
// import { Button } from '../../components/Button';
// import { Badge } from '../../components/Badge';

// Redux stuff
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import { updateApp } from '../../actions/app-action';
import { updateTest } from '../../actions/test-actions';

class NoMatch extends Component {
  // Just for intial testing purposess 
  // state = {
  //   data: null
  // }

  // Just testing the back-end linking front
  // componentDidMount() {
  //   this.apiCallTest();
  // }

  // This needs to be refactored, so that the API call is in a separate file
  // apiCallTest = async () => {
  //   const data = await API.testRoute;
  //   this.setState({ data: data.data });
  // };

  onUpdateTest = () => {
    this.props.onUpdateTest('Test results!');
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <Container>
        404
        </Container>
        </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  app: state.app,
  test: state.test
});

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateTest: updateTest,
    onUpdateApp: updateApp
  }, dispatch)
};

// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps,mapActionsToProps)(NoMatch);