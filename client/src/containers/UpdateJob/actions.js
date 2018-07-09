import { deleteJobById, updateJobById } from '../../utils/API';
 
export const UPDATEJOB_FAILED = 'UPDATEJOB_FAILED';
export const UPDATEJOB_SUCCESS = 'UPDATEJOB_SUCCESS';
export const UPDATEJOB_CLEAR = 'UPDATEJOB_CLEAR'

// Using Redux thunk middleware https://github.com/reduxjs/redux-thunk
// our action creator returns a function instead of an action. This function can
// be asynchronous to either delay the dispatch of an action, or dispatch only if certain
// conditions are met. In our case, we are having different actions dispatched depending on
// what part of the async process something is happening. This can be useful for transitional
// rendering, such as having a spinning loading wheel while awaiting some data to be received from
// a DB query etc.
export function updateJob(jobInfo) {
  // return an asynchronous function
  return async (dispatch, getState) => {
    try {
      await updateJobById(jobInfo);
      // dispatch the action only after the database call has finished
      dispatch(successUpdateJob());
    } catch (err) {
      dispatch(failedUpdateJob(err));
    }
  };
};

export function deleteJob(jobInfo) {
  // return an asynchronous function
  return async (dispatch, getState) => {
    try {
      await deleteJobById(jobInfo._id, jobInfo);
      // dispatch the action only after the database call has finished
      dispatch(successUpdateJob());
    } catch (err) {
      dispatch(failedUpdateJob(err));
    }
  };
};

export function resetUpdateJob() {
  return dispatch => dispatch(clearUpdateJob());
}

export function successUpdateJob() {
  return {
    type: UPDATEJOB_SUCCESS,
    payload: null
  };
};

export function failedUpdateJob(err) {
  return {
    type: UPDATEJOB_FAILED,
    payload: {
      error: err
    } 
  };
};

export function clearUpdateJob() {
  return {
    type: UPDATEJOB_CLEAR,
    payload: null
  }
}
