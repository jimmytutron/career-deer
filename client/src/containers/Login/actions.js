import { signIn } from '../../utils/API';

export const LOGIN = 'LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';

export function login(userInfo) {
  return async (dispatch, getState) => {
    try {
      const apiResonse = await (signIn(userInfo));
      dispatch(signedIn(apiResonse.data));
    } catch (err) {
      dispatch(failedSignIn(err));
    }
  }
};

export function signedIn(data) {
  console.log(data,'==========MAUUAUWUWUFBWUB===========');
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
