import { getAllJobs } from '../../utils/API';
export const JOBS_SUCCESS = "JOBS_SUCCESS";
export const JOBS_FAIL = "JOBS_FAIL";
export const MOVE_JOB = "MOVE_JOB";

export function grabJobs() {
	return async (dispatch, getState) => {
		try {
      const apiResponse = await (getAllJobs());
			dispatch(grabJobsSuccess(apiResponse.data));
		}
		catch (err){
			dispatch(grabJobsFail(err));
		}
	}
} 

export function moveJob(jobs,key) {
  return {
    type: MOVE_JOB,
    payload: {
      [key]: jobs
    }
  }
};

export function grabJobsSuccess(data) {
	return {
		type: JOBS_SUCCESS,
		payload: data
	}
}

export function grabJobsFail(data) {
	return {
		type: JOBS_FAIL,
		payload: data
	}
}