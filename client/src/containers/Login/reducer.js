import { LOGIN, FAILED_LOGIN } from './actions';

export default function loginReducer(state = '', { type, payload }) {
  switch(type) {
    case LOGIN:
      return {
        ...state,
        ...payload
        // status: payload.status <- redundant I think. Leaving for now..
      }
    case FAILED_LOGIN:
      return {
        ...state,
        ...payload
        // status: payload.status, <- redundant I think. Leaving for now..
        // error: payload.err <- redundant I think. Leaving for now..
      }
    default:
      return state
  }
}
