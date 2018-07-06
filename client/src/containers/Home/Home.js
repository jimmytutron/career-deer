import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import { HomePageJumbo } from '../../components/HomePageJumbo';


// Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTest } from '../../actions/test-actions';
import { updateApp } from '../../actions/app-action';
import './Home.css';

import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';

class Home extends Component {

  onUpdateTest = () => {
    this.props.onUpdateTest('Test results!');
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <HomePageJumbo />
        <div className="homepage">
        <Slide bottom>
        <Row className="justify-content-center my-3">
        <Col size="12">
        <h1 className="display-3 text-center font-weight-bold">Makin' it Rein...</h1>
        <p>
        </p>
        </Col>
        </Row>
          <Row className="justify-content-center mb-3">
            <Col size="12 md-4 lg-3">
            <Rotate duration={1500}>
            <img className="target mx-auto my-3" src="/imgs/icons/circular-target.svg" alt="circular target"/>
            </Rotate>
            <h1 className="display-6 text-center">Hunt down the job</h1>
            <p className="px-5">
            YOLO vice plaid messenger bag, af palo santo poutine offal fixie you probably haven't heard of them. Etsy scenester kinfolk forage asymmetrical meh paleo. Cred scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth.
            </p>
            </Col>
            <Col size="12 md-4 lg-3">
            <Zoom duration={1500}>
            <img className="target mx-auto my-3" src="/imgs/icons/check-box.svg" alt="check box"/>
            </Zoom>
            <h1 className="display-6 text-center">Track your progress</h1>
            <p className="px-5">
            Lorem ipsum dolor amet keytar wolf post-ironic swag franzen lyft. Vinyl tattooed tumeric shabby chic, adaptogen cliche meh disrupt snackwave. Cred scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth.
            </p>
            </Col>
            <Col size="12 md-4 lg-3">
            <LightSpeed right duration={1500}>
            <img className="target mx-auto my-3" src="/imgs/icons/dart-board.svg" alt="dart board"/>
            </LightSpeed>
            <h1 className="display-6 text-center">Hit your target</h1>
            <p className="px-5">
            You probably haven't heard of them scenester cloud bread, vape disrupt trust fund food truck pok pok. Cred scenester next level neutra raclette. Scenester succulents leggings portland, air plant raw denim swag four dollar toast health goth.
            </p>
            </Col>
          </Row>
          </Slide>
          </div>
          {/*<button className="btn btn-primary" onClick={() => this.onUpdateTest()}>Update Test</button>
          {this.props.test}*/}
      </React.Fragment>
    );
  }
}


// If you want the component to have access to props passed from a parent
// component, you need to pass them in to here;
const mapStateToProps = (state, props) => {
  return {
    app: state.app,
    test: state.test
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateTest: updateTest,
    onUpdateApp: updateApp
  }, dispatch)
};

// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) mergeProps

// bindActionCreators()
export default connect(mapStateToProps, mapActionsToProps)(Home);