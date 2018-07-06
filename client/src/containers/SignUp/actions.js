import { signUp } from '../../utils/API';
import { LOGIN_SUCCESS } from '../Login/actions';
 
export const FAILED_SIGNUP = 'FAILED_SIGNUP';

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
      const apiResponse = await (signUp(userInfo));
      // dispatch here
      dispatch(signedUp(apiResponse.data));
    } catch (err) {
      // and here
      dispatch(failedSignUp(err));
    }
  };
};

// We dispatch a type of LOGIN_SUCCESS because we want to log the user in
// if they successfully created an account. The Login reducer will pick up a LOGIN_SUCCESS.
export function signedUp(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      status: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      }
    }
  };
};

export function failedSignUp(err) {
  return {
    type: FAILED_SIGNUP,
    payload: {
      status: false,
      error: err
    } 
  };
};
