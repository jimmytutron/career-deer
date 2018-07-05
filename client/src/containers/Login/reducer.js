import { LOGIN, FAILED_LOGIN } from './actions';

export default function loginReducer(state = '', { type, payload }) {
  switch(type) {
    case LOGIN:
    // Use stuff here to make sure we are doing it in an immutable way
      return payload.loggedIn;
    case FAILED_LOGIN:
    // Use stuff here to make sure we are doing it in an immutable way
      return payload.loggedIn;
    default:
      return state
  }
}
