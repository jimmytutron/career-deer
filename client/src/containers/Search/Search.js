import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import { Container, Col, Row } from '../../components/Grid';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { searchJobs } from './actions';

class Search extends Component {


  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <SearchForm />
        </Row>
        <Row className="justify-content-center mt-5">
          Search Results go here.
        </Row>
      </Container>
    )
  }


}

// const mapStateToProps = (state,props) => {
//   return { 
//     searchResults: state.searchResults
//   }
// };

// const mapActionsToProps = (dispatch,props) => {
//   return bindActionCreators({
//     getSearchResults
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapActionsToProps)(Search);

export default Search;



