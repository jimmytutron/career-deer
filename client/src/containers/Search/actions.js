import { getSearchResults } from '../../utils/API';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export function getSearchJobs(searchInfo){
  console.log("entered get search jobs function");
  console.log(searchInfo);
  return async (dispatch, getState) => {
    try {
      const apiResponse = await getSearchResults(searchInfo);
      dispatch(successSearch(apiResponse.data))

    } catch(err) {
      dispatch(failedSearch(err));
    }
  }
}

export function successSearch(data){
  console.log(data);
  return {
    type: SEARCH_SUCCESS,
    payload: data
  }
}

export function failedSearch(err){
  console.log("entered failed search in action")
  return {
    type: SEARCH_FAILED,
    payload: {
      error: err
    }
  }
}


