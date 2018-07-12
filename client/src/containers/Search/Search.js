import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { getSearchJobs, postSaveJob, getAllSavedJobs } from './actions';
import LinearProgress from '@material-ui/core/LinearProgress';

import Bounce from 'react-reveal/Bounce';

const huntStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10px'
}


class Search extends Component {

  searchJobs = values => {
    // Calling the search job action.
    this.props.getSearchJobs(values);
  }

  saveJob = index => {
    const savedData = this.props.searchData.saved
    const saveJob_url = this.props.searchData.data[index].url

    let unique = true;
    for (let i = 0; i < savedData.length; i++) {
      if (saveJob_url === savedData[i].url) {
        //URL is found in saved jobs from database.
        unique = false;
      }
    }

    if (unique === true) {
      this.props.postSaveJob(this.props.searchData.data[index])
    }
  }

  componentDidMount() {
    this.props.getAllSavedJobs();
  }

  render() {
    return (
      <Container className="pt-5">
        <Row className="justify-content-center">
          <Col size="12 md-12 lg-5">
          <Bounce>
          <img style={huntStyle} src="/imgs/icons/hunt.svg" alt="hunt the deer"/>
          </Bounce>
          </Col>
          <SearchForm onSubmit={this.searchJobs} />
        </Row>
        <br/>
        {this.props.searchData.loading ? <LinearProgress /> : null}
        <Row className="justify-content-center mt-5">
          <Col size="12 card">
            {this.props.searchData.data.map((result, i) => {
              return (
                <SearchResults
                  key={i}
                  results={result}
                  save={() => this.saveJob(i)}
                  
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    searchData: state.searchData
  }
};

const mapActionsToProps = (dispatch, props) => ({
  getSearchJobs,
  postSaveJob,
  getAllSavedJobs
})

export default connect(mapStateToProps, mapActionsToProps())(Search);

