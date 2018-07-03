import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "../../components/Nav";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NoMatch from "../NoMatch/NoMatch";
import SignUp from "../SignUp/SignUp"
import "./App.css";

// Redux stuff
import { connect } from 'react-redux';
import { mapActionsToProps } from '../../actions';
// do the same thing for mapping state to props;
// import { mapStateToProps } from '../';

class App extends Component {
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
      <Router>
      <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/signup" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
      </React.Fragment>
      </Router>
    );
  }
}

// Just to be safe, I'm mapping all actions and all props to state.
// Not sure why. I might remove this later. The current idea is to give
// App access to everything, and then each individual component
// will only have the actions and states mapped to them which they should
// be concered about.
const mapStateToProps = state => ({
  app: state.app,
  test: state.test,
  form: state.form
});

const allActions = mapActionsToProps();
// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps,allActions)(App);
