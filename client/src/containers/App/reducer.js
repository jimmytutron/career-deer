import { APP_LOGIN, APP_LOGOUT } from './actions';
import initialState from '../../initialState';

export default function loginReducer(state = initialState, { type, payload }) {
  switch(type) {
    case APP_LOGIN:
      return {
        ...state,
        ...payload
      }
    case APP_LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
};
