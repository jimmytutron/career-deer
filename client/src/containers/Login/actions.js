import { signIn } from '../../utils/API';

import { appLoginUpdate } from '../App/actions'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FAILED_LOGIN = 'FAILED_LOGIN';
export const LOGIN_RESET = 'LOGIN_RESET'

// Using Redux thunk middleware https://github.com/reduxjs/redux-thunk
// our action creator returns a function instead of an action. This function can
// be asynchronous to either delay the dispatch of an action, or dispatch only if certain
// conditions are met. In our case, we are having different actions dispatched depending on
// what part of the async process something is happening. This can be useful for transitional
// rendering, such as having a spinnging loading wheel while awaiting some data to be received from
// a DB query etc.
export function login(userInfo) {
  // return a fn
  return async (dispatch, getState) => {
    try {
      const apiResponse = await (signIn(userInfo));
      // dispatch here
      const createdUser = {
        firstName: apiResponse.data.firstName,
        lastName: apiResponse.data.lastName,
        email: apiResponse.data.email
      }
      dispatch(appLoginUpdate(createdUser))
      dispatch(signedIn(createdUser));
    } catch (err) {
      // and here
      dispatch(failedSignIn(err));
    };
  };
};

export function resetLoginState() {
  return {
    type: LOGIN_RESET,
    payload: {
      error: null,
      status: false
    }
  }
}

export function signedIn(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      error: null,
      user: user,
      status: true,
    }
  };
};

export function failedSignIn(err) {
  return {
    type: FAILED_LOGIN,
    payload: {
      error: err,
      user: null,
      status: false,
    }
  };
};
