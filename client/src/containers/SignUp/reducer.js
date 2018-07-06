import { SIGNUP_SUCCESS, FAILED_SIGNUP } from './actions';

export default function signUpReducer(state = '', { type, payload }) {
  switch(type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case FAILED_SIGNUP:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
};
