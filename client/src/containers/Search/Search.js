import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearchJobs } from './actions';

class Search extends Component {

  searchJobs = values => {
    // Calling the search job action.
    console.log('entered search button function.')
    console.log(values);
    this.props.getSearchJobs(values);
  }
  

  render() {

    // console.log(this.props.searchData);

    return (
      <Container>
        <Row className="justify-content-center">
          <SearchForm onSubmit={this.searchJobs} />
        </Row>
        <Row className="justify-content-center mt-5">
          Search Results go here.
        </Row>
      </Container>
    )
  }


}

const mapStateToProps = (state,props) => {
  return { 
    searchData: state.searchData
  }
};

const mapActionsToProps = (dispatch,props) => {
  return bindActionCreators({
    getSearchJobs
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Search);

