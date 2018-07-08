import { getSearchResults } from '../../utils/API';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export function searchJobs(searchInfo){
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
  return {
    type: SEARCH_FAILED,
    payload: {
      error: err
    }
  }
}


