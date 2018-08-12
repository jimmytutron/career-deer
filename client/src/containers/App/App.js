import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Cookies } from 'react-cookie';

import { Nav } from "../../components/Nav";
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
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Loading from "../../components/Loading/Loading";

import ResetPW from '../ResetPW/ResetPW';


// Redux stuff
import { connect } from 'react-redux';
import { appLoginUpdate, appLogoutUpdate } from './actions';

class App extends Component {
  cookies = new Cookies()

  loginAction = user => {
    this.props.appLoginUpdate(user);
  }

  logoutAction = () => {
    this.props.appLogoutUpdate();
  }

  componentDidMount() {
    // const session = this.cookies.get("connect.sid");
    const firstName = this.cookies.get("firstName");
    const lastName = this.cookies.get("lastName");
    const email = this.cookies.get("email");
    if (firstName && lastName && email) {
      const user = {
        firstName,
        lastName,
        email
      }
      this.loginAction(user)
    }
  }

  render() {
    return (
      <Router>
        <div id="outer-container">
          {(window.location.pathname === "/chart" ||
            window.location.pathname === "/addjob" ||
            window.location.pathname === "/search" ||
            window.location.pathname === "/board" ||
            window.location.pathname === "/updatejob" ||
            window.location.pathname === "/viewjobs"
            ? 
              <BurgerMenu 
              firstName={this.props.app.user ? this.props.app.user.firstName : "Stray"} 
              lastName={this.props.app.user ? this.props.app.user.lastName : "Deer"} 
              logoutaction={this.logoutAction} />
            : 
              <Nav />)}
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
            <Route exact path ="/forgotpw" component={ResetPW} />
            <Route exact path ="/loading" component={Loading} />
            <Route component={NoMatch} />
          </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

// The nav bar needs to know whether we're logged in
const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = (dispatch, props) => ({
  appLoginUpdate,
  appLogoutUpdate
})

export default connect(mapStateToProps,mapDispatchToProps())(App);
