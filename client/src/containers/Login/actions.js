import { signIn } from '../../utils/API';

export const LOGIN = 'LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';

export function login(userInfo) {
  return async (dispatch, getState) => {
    try {
      const apiResonse = await (signIn(userInfo));
      console.log(apiResonse);
      dispatch(signedIn(apiResonse));
    } catch (err) {
      dispatch(failedSignIn(err));
    }
  }
};

export function signedIn(data) {
  return {
    type: LOGIN,
    payLoad: {
      loggedIn: true
    }
  }
};


export function failedSignIn(err) {
  return {
    type: FAILED_LOGIN,
    payLoad: {
      loggedIn: false
    }
  }
};
