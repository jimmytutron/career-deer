import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from "react-router-dom";

import queryString from 'query-string';

import { updatePassword } from './actions';
import UpdatePWForm from '../../components/UpdatePWForm';

import { /*Col, Row,*/ Container } from '../../components/Grid';




class UpdatePW extends Component {

    componentDidMount(){

    }

    requestUpdatePW = values => {
        const queryInfo = queryString.parse(this.props.location.search)
        values["code"] = queryInfo.code;
        this.props.updatePassword(values);
    }

    render() {
        if (this.props.pwUpdate.status) {
            return <Redirect to='/login' />
        } else {
            return (
                <Container>
                    <UpdatePWForm onSubmit={this.requestUpdatePW} />
                </Container>
            )
        }
    }
}


const mapStateToProps = (state, props) => {
    return {
        pwUpdate: state.pwUpdate,
        app: state.app
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    updatePassword
})

export default connect(mapStateToProps, mapDispatchToProps())(UpdatePW);
