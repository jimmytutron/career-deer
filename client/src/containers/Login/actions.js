import { signIn } from '../../utils/API';

export const LOGIN = 'LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';

export function login(userInfo) {
  // return a fn
  return async (dispatch, getState) => {
    try {
      const apiResponse = await (signIn(userInfo));
      // dispatch here
      dispatch(signedIn(apiResponse.data));
    } catch (err) {
      dispatch(failedSignIn(err));
    }
  }
};

export function signedIn(data) {
  return {
    type: LOGIN,
    payload: {
      status: true
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
