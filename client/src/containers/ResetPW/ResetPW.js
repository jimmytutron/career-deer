import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResetPassword, resetPasswordReset } from './actions';
import ResetPWForm from '../../components/ResetPWForm';

import { Col, Row, Container } from '../../components/Grid';




class ResetPW extends Component {

    componentDidMount(){
        this.props.resetPasswordReset();
    }

    requestPWReset = values => {
        this.props.postResetPassword(values);
    }

    render() {
        if (this.props.pwReset.status) {
            return (
                <Container>
                    <Row>
                        <Col />
                        <Col>
                            We've sent you an email with the link to reset your password.
                        </Col>
                        <Col />
                    </Row>
                </Container>
            )
        } else {
            return (
                <Container>
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
