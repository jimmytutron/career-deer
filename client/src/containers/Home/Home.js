import React, { Component } from 'react';
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

class Home extends Component {

  onUpdateTest = () => {
    this.props.onUpdateTest('Test results!');
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <Container>
          <HomePageJumbo className="mt-3" />
        </Container>
        <Container className="mb-3">
          <Row>
            <Col size="2 lg-4" className="bg-primary py-5">Banana</Col>
            <Col size="8 lg-4" className="bg-light py-5">Chicken</Col>
            <Col size="2 lg-4" className="bg-danger py-5" id="test">Bacon</Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <Row>
            <Col size="4">
              <Card className="bg-success py-5">
                <CardBody>
                  <CardTitle><h3>Title</h3></CardTitle>
                  <CardSubtitle className="text-muted bg-dark">This is a subtitle</CardSubtitle>
                  <CardText className="text-left text-info bg-warning">Lorem Ipsum
                    <Button color="danger" className="btn-lg float-right">HELLO</Button>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col size="4">
              <Card className="bg-warning py-5">
                <CardBody>
                  <CardTitle><h3>Title</h3></CardTitle>
                  <CardSubtitle className="text-muted bg-light">This is a subtitle</CardSubtitle>
                  <CardText className="text-left text-success bg-secondary">Lorem Ipsum
                    <Button color="info" className="btn-sm"><h3>HELLO<Badge><i class="fab fa-accessible-icon"></i></Badge></h3></Button>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col size="4">
              <Card className="bg-secondary py-5">
                <CardBody>
                  <CardTitle><h3>Title</h3></CardTitle>
                  <CardSubtitle className="text-muted bg-info">This is a subtitle</CardSubtitle>
                  <CardText className="text-left text-info bg-danger"><h1>Lorem Ipsum<Badge color="warning"><i class="far fa-grin-tongue-wink"></i></Badge></h1></CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
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
export default connect(mapStateToProps,allActions)(Home);