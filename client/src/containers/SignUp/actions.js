import { signUp } from '../../utils/API';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const FAILED_SIGNUP = 'FAILED_SIGNUP';

// email already exists
export function signup(userInfo) {
  return async (dispatch, getState) => {
    try {
      const apiResponse = await (signUp(userInfo));
      dispatch(signedUp(apiResponse.data));
    } catch (err) {
      console.log('error hit');
      dispatch(failedSignUp(err));
    }
  };
};

export function signedUp(data) {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      status: true,
      firstName: 'Nick (hard coded)',
      lastName: 'F (hard coded)',
      email: data.email,
      password: data.email  
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