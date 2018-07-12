import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { HomePageJumbo } from '../../components/HomePageJumbo';
import { StickyFooter } from '../../components/Footer/';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

// Redux stuff
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Cookies } from 'react-cookie';

import './Home.css';

import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';





class Home extends Component {

    cookies = new Cookies();

    onUpdateTest = () => {
        this.props.onUpdateTest('Test results!');
    }

  render() {
    if (this.cookies.get("email")){
        window.location.pathname="/board";
        return null;
    };
    return (
      <div className="hide-overflow">
        <HomePageJumbo />
        <Slide bottom>
        <Row className="justify-content-center mt-5 mb-3">
            <Col size="12">
            <h1 className="display-4 text-center montserrat pt-5">Makin' it Rein...</h1>
            </Col>
        </Row>
        <Row className="justify-content-center welcome-msg">
            <Col size="12 md-6">
            <p className="px-5">
                The job search can be scary. Sometimes you truly do feel like a deer in headlights. Don't get hit with anxiety! We're here to help! Applications can pile up and you can get lost in the woods of job hunting. Don't be the hunted! Be the hunter! Find and track the progress of any and all current job applications. From finding the job to submitting the application and even getting the offer, we're here to make managing that proccess easier. And when you get that offer proudly show off your newly grown antlers! You're no ordinary job seeker anymore. You're a Career Deer.
            </p>
            </Col>
        </Row>
        <Container className="my-5">
            <Row className="justify-content-center mb-5">
                <Col size="12 md-6 lg-4">
                    <Rotate duration={1500}>
                    <img className="svg-icon mx-auto my-3" src="/imgs/icons/circular-target.svg" alt="circular target"/>
                    </Rotate>
                    <h2 className="text-center montserrat">Hunt down the job</h2>
                    <p className="px-5  text-center">
                    No need to go anywhere else to hunt down a job! We have job search functionality built in! Easily track and apply to any jobs that you find through our search. Found a job from another site or through a personal connection? We've got you covered on that too! Simply add it to your tracked jobs.
                    </p>
                </Col>
                <Col size="12 md-6 lg-4">
                    <Zoom duration={1500}>
                    <img className="svg-icon mx-auto my-3" src="/imgs/icons/check-box.svg" alt="check box"/>
                    </Zoom>
                    <h2 className="text-center montserrat">Track your progress</h2>
                    <p className="px-5  text-center">
                    Monitor and track every step of the application proccess. Using our job tracker board you can see where you are in the application for each job you've applied for. Once you've moved on to the next step of the application proccess move those jobs to the next panels and easily track your applications.
                    </p>
                </Col>
                <Col size="12 md-6 lg-4">
                    <LightSpeed right duration={1500}>
                    <img className="svg-icon mx-auto my-3" src="/imgs/icons/dart-board.svg" alt="dart board"/>
                    </LightSpeed>
                    <h2 className="text-center montserrat">Hit your target</h2>
                    <p className="px-5  text-center">
                    You're the hunter now, hunt down that job and hit your mark! No matter if your application experience went well or not we'll keep track of that for you. That data can help you prepare for future applications. You can also view your progression and how well you compare to other users on the site. 
                    </p>
                </Col>
            </Row>
          </Container>
          </Slide>
          <section id="foreal" className="section-2">
            <Row className="justify-content-center mt-5 mb-3 pt-5">
                <Col size="12">
                <h1 className="display-4 text-center montserrat">For real doe?</h1>
                </Col>
            </Row>        
            <Row className="justify-content-center">
                <Col size="12 md-12 lg-2">
                <Zoom>
                <img className="svg-icon-chart my-3" src="/imgs/icons/bars-chart.svg" alt="bars chart"/>
                </Zoom>
                </Col>
                <Col size="12 md-12 lg-4">
                <p className="px-3">
                Become a Career Deer and get organized with your job search. We'll help you every step of the way! Tracking your progress not only allows you to organize your job applications it can help you see which jobs are worth pursuing and how far along you are into the proccess. Ease your mind and ease your life knowing you're on the right track. Compare your data to others and see how <span className="strike"> much better you are </span> you rank up against the rest. Track your application activity too! The more you apply the more activity and the better your chances. Career Deer is easy to use and we'll think you'll <span className="font-italic">deerly</span> love it!
                </p>
                </Col>
            </Row>
          </section>
        <Container className="section-3">
          <Row className="justify-content-end">
          <LightSpeed right>
          <img className="deer-guy" src="/imgs/icons/deer-guy.svg" alt="deer guy"/>
          </LightSpeed>
          </Row>
            <Row className="justify-content-center">
                <Col size="12 md-2">
                <Rotate>
                <img className="svg-icon-list my-3" src="/imgs/icons/archive.svg" alt="searching"/>
                </Rotate>
                </Col>
                <Col size="12 md-6">
                <h4 className="montserrat mt-4">Finding Jobs</h4>
                <p className=" mt-1 px-1">
                Use our built in job search to find and manage new applications! Just add what you industry or topic you are looking for and a location and our search will do the rest!  
                </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col size="12 md-2">
                <Rotate>
                <img className="svg-icon-list my-3" src="/imgs/icons/manage.svg" alt="searching"/>
                </Rotate>
                </Col>
                <Col size="12 md-6">
                <h4 className="montserrat mt-4">Manage your notes and data</h4>
                <p className=" mt-1 px-1">
                Keep notes and track all your job progress. Each job allows for notes and tracks progress, names, numbers, anything you want really! The more you note and track, the more organized you become!
                </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col size="12 md-2">
                <Rotate>
                <img className="svg-icon-list my-3" src="/imgs/icons/calendar.svg" alt="searching"/>
                </Rotate>
                </Col>
                <Col size="12 md-6">
                <h4 className="montserrat mt-4">Set reminders and schedules</h4>
                <p className=" mt-1 px-1">
                Give yourself reminders and view schedules in the jobs notes themself! Email and text reminders are coming in the future so sit tight while we work out these features!
                </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col size="12 md-2">
                <Rotate>
                <img className="svg-icon-list my-3" src="/imgs/icons/chatting.svg" alt="searching"/>
                </Rotate>
                </Col>
                <Col size="12 md-6">
                <h4 className="montserrat mt-4">Ace that interview!</h4>
                <p className=" mt-1 px-1">
                With all the tools and all your progress you're ready to ace the interview! We hope our application has helped you in your journey. Good luck from the CareerDeer team! 
                </p>
                </Col>
            </Row>
          </Container>
          <section id="sign-up" className="section-4 mb-5">
            <Row className="justify-content-center text-center my-5 py-5">
                <Col size="12 md-8">
                <Pulse>
                <img width="250px" src="/imgs/logo-symbol.svg" alt="logo"/>
                </Pulse>
                <h1 className="display-6 text-center montserrat">kickstart your career hunt</h1>
                 <p className=" mt-1">
                Your dream job is just a couple hooves away.
                </p>
                <Button 
                variant="extendedFab" 
                color="secondary"
                component={Link} to="/signup">
                <span className="big-btn">Get Started!</span>
                </Button>
                </Col>
            </Row>          
          </section>
          <StickyFooter />
      </div>
    );
  }
}


// If you want the component to have access to props passed from a parent
// component, you need to pass them in to here;
// const mapStateToProps = (state, props) => {
//   return {
//   }
// };

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators({
//   }, dispatch)
// };

// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) mergeProps

// bindActionCreators()
// export default connect(mapStateToProps, mapActionsToProps)(Home);
export default Home;
