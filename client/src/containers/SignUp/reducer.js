import { FAILED_SIGNUP, SIGNUP_SUCCESS } from './actions';

export default function signUpReducer(state = '', { type, payload }) {
  switch(type) {
    case FAILED_SIGNUP:
      return {
        ...state,
        ...payload
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
};
