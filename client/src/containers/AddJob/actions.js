import { createJob } from '../../utils/API';
 
export const ADDJOB_FAILED = 'ADDJOB_FAILED';
export const ADDJOB_SUCCESS = 'ADDJOB_SUCCESS';
export const ADDJOB_CLEAR = 'ADDJOB_CLEAR'

// Using Redux thunk middleware https://github.com/reduxjs/redux-thunk
// our action creator returns a function instead of an action. This function can
// be asynchronous to either delay the dispatch of an action, or dispatch only if certain
// conditions are met. In our case, we are having different actions dispatched depending on
// what part of the async process something is happening. This can be useful for transitional
// rendering, such as having a spinnging loading wheel while awaiting some data to be received from
// a DB query etc.
export function addJob(jobInfo) {
  // return a fn
  return async (dispatch, getState) => {
    try {
      await createJob(jobInfo);
      // dispatch here
      dispatch(successAddJob());
    } catch (err) {
      // and here
      dispatch(failedAddJob(err));
    }
  };
};

export function successAddJob() {
  return {
    type: ADDJOB_SUCCESS,
    payload: null
  };
};

export function failedAddJob(err) {
  return {
    type: ADDJOB_FAILED,
    payload: {
      error: err
    } 
  };
};

export function clearAddJob() {
  return {
    type: ADDJOB_CLEAR,
    payload: null
  }
}