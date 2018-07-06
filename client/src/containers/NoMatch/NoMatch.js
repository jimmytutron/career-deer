import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

class NoMatch extends Component {

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className="bg-secondary"/>
            <Col size="6" className="bg-primary">
            404
            </Col>
            <Col className="bg-secondary"/>
          </Row>
        </Container>
        </React.Fragment>
    );
  }
}


// Connect can take 3 arguments
// 1) mapStateToProps
// 2) mapActionsToProps 
// 3) 
export default NoMatch;
