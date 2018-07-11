import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

// import "./App.css";
// import { StickyFooter } from '../../components/Footer';


// Redux stuff
import { connect } from 'react-redux';
import { appLoginUpdate, appLogoutUpdate } from './actions';

class App extends Component {

  loginAction = user => {
    this.props.appLoginUpdate(user);
  }

  logoutAction = () => {
    this.props.appLogoutUpdate();
  }

  renderNav = () => {
    switch (window.location.pathname) {
      // case "/":
      //   return <Nav />;
      // case "/login":
      //   return <Nav />;
      // case "/signup":
      //   return <NavMain />;
      case "/chart":
        return <BurgerMenu />;
      case "/addjob":
        return <BurgerMenu />;
      case "/search":
        return <BurgerMenu />;
      case "/board":
        return <BurgerMenu />;
      case "/updatejob":
        return <BurgerMenu />;
      case "/viewjobs":
        return <BurgerMenu />;
      default:
        return <Nav />;
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
              <BurgerMenu logoutaction={this.logoutAction}/>
            : 
              <Nav />)}
          <main id="page-wrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} loginaction={this.loginAction} />
            <Route exact path="/signup" component={SignUp} loginaction={this.loginAction} />
            <Route exact path="/chart" component={Chart} />
            <Route exact path="/addjob" component={AddJob} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/updatejob" component={UpdateJob} />
            <Route exact path ="/viewjobs" component={ViewJobs} />
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
  app: state.app,
  loggedIn: state.loggedIn,
  signedUp: state.signedUp
});


// We don't have to use BindActionCreators because this is a smart component
const mapActionsToProps = (dispatch, props) => ({
  appLoginUpdate,
  appLogoutUpdate
})
// };
// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default connect(mapStateToProps,mapActionsToProps())(App);
