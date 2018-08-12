import { getAllJobs } from '../../utils/API';

export const VIEWJOBS_SUCCESS = 'VIEWJOBS_RESET';
export const VIEWJOBS_RESET = 'VIEWJOBS_RESET';

export function getAllSavedJobs(){
  return async (dispatch, getState) => {
    try {
      const apiResponse = await getAllJobs();
      dispatch(updateViewJobs(apiResponse.data))

    } catch(err) {
      dispatch(resetViewJobs())
    }
  }
}

export function resetViewJobs(){

  return {
    type: VIEWJOBS_RESET,
    payload: {
      data: []
    }
  }
}

export function updateViewJobs(data){
  return {
    type: VIEWJOBS_SUCCESS,
    payload: {
      data: data
    }
  }
}


