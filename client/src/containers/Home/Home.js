import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import { HomePageJumbo } from '../../components/HomePageJumbo';


// Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTest } from '../../actions/test-actions';
import { updateApp } from '../../actions/app-action';

class Home extends Component {

  onUpdateTest = () => {
    this.props.onUpdateTest('Test results!');
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <HomePageJumbo />
        <Container className="mb-3">
          <Row>
            <Col size="2 lg-4" className="bg-primary py-5">Banana</Col>
            <Col size="8 lg-4" className="bg-light py-5">Chicken</Col>
            <Col size="2 lg-4" className="bg-danger py-5" id="test">Bacon</Col>
          </Row>
        </Container>
          <button className="btn btn-primary" onClick={() => this.onUpdateTest()}>Update Test</button>
          {this.props.test}
      </React.Fragment>
    );
  }
}


// If you want the component to have access to props passed from a parent
// component, you need to pass them in to here;
const mapStateToProps = (state, props) => {
  return {
    app: state.app,
    test: state.test
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateTest: updateTest,
    onUpdateApp: updateApp
  }, dispatch)
};

// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) mergeProps

// bindActionCreators()
export default connect(mapStateToProps, mapActionsToProps)(Home);