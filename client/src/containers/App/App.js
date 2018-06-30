import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from '../../utils/API';
import {Col, Container, Row} from '../../components/Grid';
import {Nav} from '../../components/Nav';
import {HomePageJumbo} from '../../components/HomePageJumbo';


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
        <Container className="mb-5">
          <Row>
            <Col size="2 lg-4" className="bg-primary py-5">Banana</Col>
            <Col size="8 lg-4" className="bg-light py-5">Chicken</Col>
            <Col size="2 lg-4" className="bg-danger py-5" id="test">Bacon</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
