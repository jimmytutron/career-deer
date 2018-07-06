import { signIn } from '../../utils/API';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FAILED_LOGIN = 'FAILED_LOGIN';

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
      console.log(apiResponse)
      // dispatch here
      dispatch(signedIn(apiResponse.data));
    } catch (err) {
      // and here
      dispatch(failedSignIn(err));
    }
  }
};

export function signedIn(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      status: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      }
    }
  }
};

export function failedSignIn(err) {
  return {
    type: FAILED_LOGIN,
    payload: {
      status: false,
      error: err   
    }
  }
};
