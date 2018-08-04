import { signUp, googleSignUp } from '../../utils/API';
import { appLoginUpdate } from '../App/actions';
 
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_RESET = 'SIGNUP_RESET';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

// Using Redux thunk middleware https://github.com/reduxjs/redux-thunk
// our action creator returns a function instead of an action. This function can
// be asynchronous to either delay the dispatch of an action, or dispatch only if certain
// conditions are met. In our case, we are having different actions dispatched depending on
// what part of the async process something is happening. This can be useful for transitional
// rendering, such as having a spinnging loading wheel while awaiting some data to be received from
// a DB query etc.
export function signup(userInfo) {
  // return a fn
  return async (dispatch, getState) => {
    try {
      userInfo.email = userInfo.email.toLowerCase()
      const apiResponse = await (signUp(userInfo));
      const createdUser = {
        firstName: apiResponse.data.firstName,
        lastName: apiResponse.data.lastName,
        email: apiResponse.data.email
      }
      // dispatch here
      dispatch(signedUp());
      dispatch(appLoginUpdate(createdUser));
    } catch (err) {
      // and here
      dispatch(failedSignUp(err));
    };
  };
};


// Possibly combine the two auth action creators into a single one later.
export function googleAuth(data) {
  return {
    type: AUTH_SUCCESS,
    payload: {
      renderMaterial: data
    }
  };
};

export function failedGoogleAuth(data) {
  return {
    type: AUTH_FAILURE,
    payload: {
      renderMaterial: data
    }
  }
}

// We dispatch a type of SIGNUP_SUCCESS because we want to know 
// clear any potential errors
export function signedUp() {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      error: null
    }
  };
};

export function failedSignUp(err) {
  return {
    type: SIGNUP_FAILED,
    payload: {
      error: err
    } 
  };
};

export function resetSignUp() {
  return {
    type: SIGNUP_RESET,
    payload: {}
  }
}
