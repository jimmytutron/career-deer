import React from 'react';

import {Col, Row} from '../Grid';

const SearchResults = props => {

  console.log("props: ", props);


  let renderResults = results => {
    return results.map((result) => {
      console.log(result);
      return (
        <Row >
          <div>
            {result}
          </div>
        </Row>
      )
    })
  }

  return (
    <div>
      Testing SearchResults page.

      {/* {this.renderResults(this.props.results)} */}


    </div>
  )
}



export default SearchResults;




