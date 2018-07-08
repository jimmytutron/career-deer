import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearchJobs } from './actions';

class Search extends Component {

  searchJobs = values => {
    // Calling the search job action.
    this.props.getSearchJobs(values);
  }
  
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <SearchForm onSubmit={this.searchJobs} />
        </Row>
        <Row className="justify-content-center mt-5">
          <SearchResults results={this.props.searchData}/>
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

