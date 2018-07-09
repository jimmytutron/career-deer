import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { HomePageJumbo } from '../../components/HomePageJumbo';


// Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Home.css';

import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

class Home extends Component {

  onUpdateTest = () => {
    this.props.onUpdateTest('Test results!');
  }

  render() {
    return (
      <div className="hide-overflow">
        <HomePageJumbo />
        <Slide bottom>
        <Row className="justify-content-center mt-5 mb-3">
            <Col size="12">
            <h1 className="display-4 text-center montserrat">Makin' it Rein...</h1>
            </Col>
        </Row>
        <Row className="justify-content-center welcome-msg">
            <Col size="12 md-6">
            <p className="px-5">
            YOLO vice plaid messenger bag, af palo santo poutine offal fixie you probably haven't heard of them. Etsy scenester kinfolk forage asymmetrical meh paleo. Cred scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth. Lorem ipsum dolor amet keytar wolf post-ironic swag franzen lyft. Vinyl tattooed tumeric shabby chic, adaptogen cliche meh disrupt snackwave. Cred ailoi scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth.
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
                    YOLO vice plaid messenger bag, af palo santo poutine offal fixie you probably haven't heard of them. Etsy scenester kinfolk forage asymmetrical meh paleo. Cred scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth.
                    </p>
                </Col>
                <Col size="12 md-6 lg-4">
                    <Zoom duration={1500}>
                    <img className="svg-icon mx-auto my-3" src="/imgs/icons/check-box.svg" alt="check box"/>
                    </Zoom>
                    <h2 className="text-center montserrat">Track your progress</h2>
                    <p className="px-5  text-center">
                    Lorem ipsum dolor amet keytar wolf post-ironic swag franzen lyft. Vinyl tattooed tumeric shabby chic, adaptogen cliche meh disrupt snackwave. Cred ailoi scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth.
                    </p>
                </Col>
                <Col size="12 md-6 lg-4">
                    <LightSpeed right duration={1500}>
                    <img className="svg-icon mx-auto my-3" src="/imgs/icons/dart-board.svg" alt="dart board"/>
                    </LightSpeed>
                    <h2 className="text-center montserrat">Hit your target</h2>
                    <p className="px-5  text-center">
                    You probably haven't heard of them scenester cloud bread, vape disrupt trust fund food truck pok pok. Cred scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth.
                    </p>
                </Col>
            </Row>
          </Container>
          </Slide>
          <div className="section-2">
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
                Lorem ipsum dolor amet paleo ugh pug man braid, skateboard ramps everyday carry single-origin coffee tote bag master cleanse dreamcatcher occupy irony prism. Activated charcoal chambray jianbing, gastropub man braid blog skateboard aesthetic actually hell of vice prism. Cred iPhone ugh, ennui forage poutine drinking vinegar biodiesel occupy viral raw denim glossier. Paleo pitchfork irony banh mi, roof party whatever selvage ramps crucifix dreamcatcher hella kogi.
                </p>
                </Col>
            </Row>
          </div>
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
                Lorem ipsum dolor amet paleo ugh pug man braid, skateboard ramps everyday carry single-origin coffee tote bag master cleanse dreamcatcher occupy irony prism. 
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
                Lorem ipsum dolor amet paleo ugh pug man braid, skateboard ramps everyday carry single-origin coffee tote bag master cleanse dreamcatcher occupy irony prism. 
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
                Lorem ipsum dolor amet paleo ugh pug man braid, skateboard ramps everyday carry single-origin coffee tote bag master cleanse dreamcatcher occupy irony prism. 
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
                Lorem ipsum dolor amet paleo ugh pug man braid, skateboard ramps everyday carry single-origin coffee tote bag master cleanse dreamcatcher occupy irony prism. 
                </p>
                </Col>
            </Row>
          </Container>

          <div className="section-4">
            <Row className="justify-content-center text-center mt-5 pt-5">
                <Col size="12 md-8">
                <Pulse>
                <img width="250px" src="/imgs/logo-symbol.svg" alt="logo"/>
                </Pulse>
                <h1 className="display-6 text-center montserrat">kickstart your career hunt</h1>
                 <p className=" mt-1">
                Your dream job is just a couple hooves away.
                </p>
                <a className="btn sign-up-btn btn-info mb-5" href="/signup">Get Started!</a>
                </Col>
            </Row>          
          </div>
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
