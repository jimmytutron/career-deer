import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cookies } from 'react-cookie';
import { postResetPassword } from './actions';
import { Col, Row, Container } from '../../components/Grid';
import Button from '@material-ui/core/Button';

class ResetPW extends Component {

    componentDidMount(){

    }

    pwReset = values => {
        this.props.postResetPassword(values);
    }

render() {
    return (
        <Container>
        <Row className="justify-content-center text-center">
            <Col size="10">
            <Button
            variant="extendedFab" 
            color="secondary"
            onClick={this.pwReset}
            >
            Chicken</Button>
            </Col>
        </Row>  
        </Container>
    )
}
}

function mapStateToProps(state){
    return {
        pwReset: state.pwReset,
        app: state.app
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    postResetPassword
})

export default connect(mapStateToProps, mapDispatchToProps())(ResetPW);
