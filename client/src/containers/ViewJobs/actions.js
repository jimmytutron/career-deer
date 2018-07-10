import { getAllJobs } from '../../utils/API';

export const VIEWJOBS_SUCCESS = 'VIEWJOBS_RESET';
export const VIEWJOBS_RESET = 'VIEWJOBS_RESET';
export const VIEWJOBS_EDIT = 'VIEWJOBS_EDIT';

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

export function editJob(job) {
  return {
    type: VIEWJOBS_EDIT,
    payload: {
      edit: job
    }
  }
}

export function resetViewJobs(){

  return {
    type: VIEWJOBS_RESET,
    payload: {
      edit: null,
      data: []
    }
  }
}

export function updateViewJobs(data){
  return {
    type: VIEWJOBS_SUCCESS,
    payload: {data: data}
  }
}


