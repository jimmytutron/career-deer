import { LOGIN_SUCCESS, FAILED_LOGIN } from './actions';

export default function loginReducer(state = '', { type, payload }) {
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
  };
};
