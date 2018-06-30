import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from '../../utils/API';
import {Col, Container, Row} from '../../components/Grid';
import {Nav} from '../../components/Nav';
import {Jumbotron} from '../../components/Jumbotron';

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
        <Container>
          <Row>
          
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
