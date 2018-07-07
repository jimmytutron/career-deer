import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "../../components/Nav";
import Home from "../Home/Home";
import LoginPage from "../Login/LoginPage";
import NoMatch from "../NoMatch/NoMatch";
import SignUp from "../SignUp/SignUp";
import AddJob from "../AddJob"
import "./App.css";
import Chart from '../Chart/Chart';

// Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateApp } from '../../actions/app-action';
import { updateTest } from '../../actions/test-actions';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/login" component={LoginPage} />
        <Route exact path ="/signup" component={SignUp} />
        <Route exact path ="/chart" component={Chart} />
        <Route exact path ="/addjob" component={AddJob} />
        {/* <Route exact path ="/auth/google" component={} /> */}
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
  form: state.form,
  loggedIn: state.loggedIn
});


// TODO remove these test reducers off of here, as well as the test reducer folders.
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateTest: updateTest,
    onUpdateApp: updateApp
  }, dispatch)
};
// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps,mapActionsToProps)(App);
