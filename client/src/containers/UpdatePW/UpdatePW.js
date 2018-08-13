import React, { Component } from 'react';
import { connect } from 'react-redux';

import queryString from 'query-string';

import { updatePassword } from './actions';
import UpdatePWForm from '../../components/UpdatePWForm';

import { Field, reduxForm } from 'redux-form';
import { Col, Row, Container } from '../../components/Grid';




class UpdatePW extends Component {

    componentDidMount(){

    }

    requestUpdatePW = values => {
        const queryInfo = queryString.parse(this.props.location.search)
        values["code"] = queryInfo.code;
        this.props.updatePassword(values);
    }

    render() {
        return (
            <Container>
                <UpdatePWForm onSubmit={this.requestUpdatePW} />
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
    updatePassword
})

export default connect(mapStateToProps, mapDispatchToProps())(UpdatePW);
