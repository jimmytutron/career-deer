import React from 'react';
import { Col, Row } from '../Grid';
import './SearchResults.css';

const SearchResults = props => {

  return (
    <div className="card border-0 mb-3">
      <div className="card-header">
        <a href={props.results.url} className="title border-0">
          <span className="font-weight-bold">
            {props.results.title}
          </span>
        </a>
        <button type="button" className="btn btn-success float-right" onClick={props.save}>Track
        </button>
      </div>
      <Row className="col-12">
        <Col size="12 md-6 lg-6">{props.results.company_name}</Col>
        <Col size="12 md-6 lg-6">{props.results.location}</Col>
      </Row>
    </div>
  )

}



export default SearchResults;




