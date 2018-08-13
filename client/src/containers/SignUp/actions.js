import { signUp, /*googleSignUp*/ } from '../../utils/API';
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

// Thunks
// ==========// ==========// ==========// ==========// ==========// ==========// ==========// ==========
export function signUpThunk(userInfo) {
  console.log('thunk is called!');
  // note: this async function can also have a second parameter as getState - currently not being used.
  return async (dispatch) => {
    try {
      userInfo.email = userInfo.email.toLowerCase()
      const apiResponse = await (signUp(userInfo));
      const createdUser = {
        firstName: apiResponse.data.firstName,
        lastName: apiResponse.data.lastName,
        email: apiResponse.data.email
      }
      dispatch(signedUp());
      dispatch(appLoginUpdate(createdUser));
    } catch(err) {
      dispatch(failedSignUp(err));
    };
  };
};

export function googleSignUpThunk(/*data?*/) {
  return async (dispatch) => {
    try {
      // Do Google login stuff here
      // Will it be asynchronous? Will I used an API call?
      // const createdUser; 
      /*
        {
          firstName: 'Chicken',
          lastName: 'Farley',
          email: 'bacon@gmail.com'
        }'
      */
      dispatch(appLoginUpdate(/*createdUser*/))
    } catch(err) {
      dispatch(failedSignUp(err));
    }
  }
}
// ==========// ==========// ==========// ==========// ==========// ==========// ==========// ==========


// Action Creators
// ==========// ==========// ==========// ==========// ==========// ==========// ==========// ==========
function signedUp() {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      error: null
    }
  };
};

function failedSignUp(err) {
  return {
    type: SIGNUP_FAILED,
    payload: {
      error: err
    } 
  };
};

// *
export function resetSignUp() {
  return {
    type: SIGNUP_RESET,
    payload: {}
  }
}
// ==========// ==========// ==========// ==========// ==========// ==========// ==========// ==========
