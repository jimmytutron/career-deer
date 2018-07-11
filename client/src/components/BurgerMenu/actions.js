import { logOut } from '../../utils/API';
import { appLogoutUpdate } from '../../containers/App/actions'

export const logout = async (dispatch, getState) => {
  try {
    await logOut();
    dispatch(appLogoutUpdate());
  } catch(err) {
    console.log(err)
  }
}