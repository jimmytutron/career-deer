import { LOGIN, FAILED_LOGIN } from './actions';

export default function loginReducer(state = '', { type, payload }) {
  switch(type) {
    case LOGIN:
      return {
        ...state,
        ...payload,
        status: payload.status
      }
    case FAILED_LOGIN:
      return {
        ...state,
        ...payload,
        status: payload.status,
        error: payload.err
      }
    default:
      return state
  }
}
