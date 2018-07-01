import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import { HomePageJumbo } from '../../components/HomePageJumbo';


// Redux stuff
import { connect } from 'react-redux';
import { mapActionsToProps } from '../../actions';
// do the same thing for mapping state to props;
// import { mapStateToProps } from '../';

class Home extends Component {

  onUpdateTest = () => {
    this.props.onUpdateTest('Test results!');
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <HomePageJumbo className="home-jumbotron"/>
        <Container className="mb-3">
          <Row>
            <Col size="2 lg-4" className="bg-primary py-5">Banana</Col>
            <Col size="8 lg-4" className="bg-light py-5">Chicken</Col>
            <Col size="2 lg-4" className="bg-danger py-5" id="test">Bacon</Col>
          </Row>
        </Container>
          <button onClick={() => this.onUpdateTest()}>Update Test</button>
          {this.props.test}
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  app: state.app,
  test: state.test
});

// Only pull off the actions this component needs;
// For not its just to test that a simple button is interacting with the store
const { onUpdateTest, onUpdateApp } = mapActionsToProps();

const actions = {
  onUpdateTest,
  onUpdateApp
}

// console.log(`Original: ${Object.values(mapActionsToProps())}`);
// console.log(`Keys: ${Object.keys(actions)}`);
// console.log(`Values: ${Object.values(actions)}`);

// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps, actions)(Home);