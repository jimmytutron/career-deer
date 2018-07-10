import { LOGIN_SUCCESS, FAILED_LOGIN } from './actions';
import initialState from '../../initialState';

export default function loginReducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case FAILED_LOGIN:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
};
