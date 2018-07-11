import { LOGIN_SUCCESS, FAILED_LOGIN, LOGIN_RESET } from './actions';
import initialState from '../../initialState';

export default function loginReducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null
      }
    case FAILED_LOGIN:
      return {
        ...state,
        ...payload
      }
    case LOGIN_RESET:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
};
