import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResetPassword } from './actions';
import ResetPWForm from '../../components/ResetPWForm';

import { Field, reduxForm } from 'redux-form';
import { Col, Row, Container } from '../../components/Grid';




class ResetPW extends Component {

    componentDidMount(){

    }

    requestPWReset = values => {
        this.props.postResetPassword(values);
    }

    render() {
        return (
            <Container>
                <ResetPWForm onSubmit={this.requestPWReset} />
            </Container>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        pwReset: state.pwReset,
        app: state.app
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    postResetPassword
})

export default connect(mapStateToProps, mapDispatchToProps())(ResetPW);
