import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.apiCallTest();
  }

  // This needs to be refactored, so that the API call is in a separate file
  apiCallTest = async () => {
    const data = await axios.get('/tests');
    this.setState({ data: data.data })
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
      </div>
    );
  }
}

export default App;
