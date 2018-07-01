import React, { Component } from 'react';
import API from '../../utils/API';
import { Col, Container, Row } from '../../components/Grid';
import { Nav } from '../../components/Nav';
import { HomePageJumbo } from '../../components/HomePageJumbo';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from '../../components/Card';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

// Redux stuff
import { connect } from 'react-redux';
import { mapActionsToProps } from '../../actions';
// do the same thing for mapping state to props;
// import { mapStateToProps } from '../';

class Login extends Component {
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
        
        </Container>
        </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  app: state.app,
  test: state.test
});

const allActions = mapActionsToProps();
// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps,allActions)(Login);