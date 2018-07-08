import { getSearchResults } from '../../utils/API';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export function getSearchJobs(searchInfo){
  return async (dispatch, getState) => {
    try {
      const apiResponse = await getSearchResults(searchInfo.keywords, searchInfo.location);
      dispatch(successSearch(apiResponse.data))

    } catch(err) {
      dispatch(failedSearch(err));
    }
  }
}

export function successSearch(data){
  return {
    type: SEARCH_SUCCESS,
    payload: data
  }
}

export function failedSearch(err){
  return {
    type: SEARCH_FAILED,
    payload: {
      error: err
    }
  }
}


