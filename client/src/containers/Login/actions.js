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
  console.log(data);
  return {
    type: LOGIN,
    payload: {
      loggedIn: true
    }
  }
};


export function failedSignIn(err) {
  return {
    type: FAILED_LOGIN,
    payload: {
      loggedIn: false,
      err: err   
    }
  }
};
