import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResetPassword, resetPasswordReset } from './actions';
import ResetPWForm from '../../components/ResetPWForm';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

import { Col, Row, Container } from '../../components/Grid';




class ResetPW extends Component {

    componentDidMount() {
        this.props.resetPasswordReset();
    }

    requestPWReset = values => {
        this.props.postResetPassword(values);
    }

    render() {
        if (this.props.pwReset.status) {
            return (
            <Slide left>
                <Container>
                    <Row className="justify-content-center text-center pt-5 mx-0 px-0">
                        <Col size="12 md-10">                          
                                <img className="my-4" width="30%" src="/imgs/icons/send.svg" alt="sending" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center">
                        <Col className="montserrat">
                           <h3>An email has been sent for a link to reset your password.</h3>
                           <h4>Click <Link to="/login">here</Link> to return back to the herd</h4>
                        </Col>
                    </Row>
                </Container>
            </Slide>
            )
        } else {
            return (
                <Container>
                    <Row className="justify-content-center text-center pt-5 mx-0 px-0">
                        <Col size="12 md-10">
                            <Bounce>
                                <img className="my-4" width="35%" src="/imgs/icons/question.svg" alt="forgot your password?" />
                            </Bounce>
                        </Col>
                    </Row>
                    <ResetPWForm onSubmit={this.requestPWReset} />
                </Container>
            )
        }
    }
}


const mapStateToProps = (state, props) => {
    return {
        pwReset: state.pwReset,
        app: state.app
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    postResetPassword,
    resetPasswordReset
})

export default connect(mapStateToProps, mapDispatchToProps())(ResetPW);
