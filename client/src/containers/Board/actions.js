import { getAllJobs } from '../../utils/API';

// export const NEW_LOC = "NEW_LOC";
// export const DEFAULT_LOC = "DEFAULT_LOC";
export const JOBS_SUCCESS = "JOBS_SUCCESS";
export const JOBS_FAIL = "JOBS_FAIL";

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

// export function defaultLocation(data) {
// 	return {
// 		type: DEFAULT_LOC,
// 		payload: data
// 	}
// }

// export function newLocation(data) {
// 	return {
// 		type: NEW_LOC,
// 		payload: data
// 	}
// }

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