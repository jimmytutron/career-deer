import { logOut, initialLoad } from '../../utils/API';

export const APP_LOGIN = 'APP_LOGIN_UPDATE';
export const APP_LOGOUT = 'APP_LOGOUT';

export function appInitialLoad() {
  return async (dispatch) => {
    const user = await initialLoad();
    return dispatch(appLoginUpdate(user.data));
  }
}

export function appLoginUpdate(loginData) {
  return {
    type: APP_LOGIN,
    payload: {
      loading: false,
      user: loginData
    }
  }
}

export function appLogoutUpdate() {
  logOut();
  return {
    type: APP_LOGOUT,
    payload: {}
  }
}
