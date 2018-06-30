import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from '../../utils/API';
import {Col, Container, Row} from '../../components/Grid';
import {Nav} from '../../components/Nav';
import {HomePageJumbo} from '../../components/HomePageJumbo';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from '../../components/Card';
import {Button} from '../../components/Button';
import {Badge} from '../../components/Badge';


class App extends Component {
  // Just for intial testing purposess 
  state = {
    data: null
  }

  // Just testing the back-end linking front
  componentDidMount() {
    this.apiCallTest();
  }

  // This needs to be refactored, so that the API call is in a separate file
  apiCallTest = async () => {
    const data = await API.testRoute;
    this.setState({ data: data.data });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Made a change</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          Heres the API call data {this.state.data}
        </div>
        <Nav/>
        <Container>
          <HomePageJumbo className="mt-3"/>
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
      </div>
    );
  }
}

export default App;
