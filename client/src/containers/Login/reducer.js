import { LOGIN, FAILED_LOGIN } from './actions';

export default function loginReducer(state = '', { type, payload }) {
  switch(type) {
    case LOGIN:
      return payload.loggedIn;
    case FAILED_LOGIN:
      return payload.loggedIn;
    default:
      return state
  }
}
