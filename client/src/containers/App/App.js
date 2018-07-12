import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavMain } from "../../components/Nav";
import Home from "../Home/Home";
import LoginPage from "../Login/LoginPage";
import NoMatch from "../NoMatch/NoMatch";
import SignUp from "../SignUp/SignUp";
import AddJob from "../AddJob/AddJob";
import UpdateJob from '../UpdateJob/UpdateJob';
import ViewJobs from '../ViewJobs/ViewJobs';
import Chart from '../Chart/Chart';
import Search from '../Search/Search';
import Board from '../Board/Board';
import BurgerMenuTest from '../BurgerMenuTest/BurgerMenuTest';

// import "./App.css";
import { StickyFooter } from '../../components/Footer';


// Redux stuff
// import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="outer-container">
          { window.location.pathname === "/" ? <Nav />
          : <NavMain /> }
          <BurgerMenuTest />
          <main id="page-wrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/chart" component={Chart} />
            <Route exact path="/addjob" component={AddJob} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/updatejob" component={UpdateJob} />
            <Route exact path ="/viewjobs" component={ViewJobs} />
            <Route path="/burger" component={BurgerMenuTest} />
            <Route component={NoMatch} />
          </Switch>
          </main>
          <StickyFooter />
        </div>
      </Router>
    );
  }
}

// The nav bar needs to know whether we're logged in
const mapStateToProps = state => ({
  app: state.app,
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(App);
