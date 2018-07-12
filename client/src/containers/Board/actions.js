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

/**
 * @param  {Array} jobs is an array of job objects
 * @param  {string} key is a string that references a coresponding tile position
 *                  name on our intial state object.
 * @param  {Object} crossMoved (optional) is an object of the following format
 *                  { source: [{job},{job},..], destination: [{job},{job}..]  }
 */
export function moveJob(jobs,key,crossMoved = undefined) {
  return {
    type: MOVE_JOB,
    payload: crossMoved || {
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