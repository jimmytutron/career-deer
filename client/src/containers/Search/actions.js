import { getSearchResults, createJob, getAllJobs } from '../../utils/API';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';
export const SEARCH_SAVED_UPDATE = 'SEARCH_SAVED_UPDATE';
export const SEARCH_SAVED_FAILED = 'SEARCH_SAVED_FAILED';
export const SEARCH_LOADING = 'SEARCH_LOADING';

export function getSearchJobs(searchInfo){
  return async (dispatch, getState) => {
    try {
      dispatch(startSearch());
      const apiResponse = await getSearchResults(searchInfo.keywords, searchInfo.location);
      dispatch(successSearch(apiResponse.data))

    } catch(err) {
      dispatch(failedSearch(err));
    }
  }
}

export function postSaveJob(saveInfo){
  return async (dispatch, getState) => {
    try {
      await createJob(saveInfo)
      dispatch(getAllSavedJobs())

    } catch(err) {
      // dispatch(failedSave(err));
    }
  }
}

export function getAllSavedJobs(){
  return async (dispatch, getState) => {
    try {
      const apiResponse = await getAllJobs();
      dispatch(updateSaved(apiResponse.data))

    } catch(err) {
      // dispatch(failedSave(err));
    }
  }
}

export function startSearch(){
  return {
    type: SEARCH_LOADING,
    payload: {
      loading: true
    }
  }
}

export function successSearch(data){
  return {
    type: SEARCH_SUCCESS,
    payload: {
      data: data,
      loading: false
    }
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


export function updateSaved(data){
  return {
    type: SEARCH_SAVED_UPDATE,
    payload: {saved: data}
  }
}


