import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import { HomePageJumbo } from '../../components/HomePageJumbo';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from '../../components/Card';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

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

const allActions = mapActionsToProps();
// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps, allActions)(Home);