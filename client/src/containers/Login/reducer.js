import { LOGIN, FAILED_LOGIN } from './actions';

export default function loginReducer(state = '', { type, payload }) {
  switch(type) {
    case LOGIN:
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
}
