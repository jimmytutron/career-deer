import { FAILED_SIGNUP, SIGNUP_SUCCESS, AUTH_SUCCESS } from './actions';

export function signUpReducer(state = '', { type, payload }) {
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
      return state;
  };
};

export function authTestReducer(state = '', { type, payload }) {
  switch(type) {
    case AUTH_SUCCESS:
      return  {
        ...state,
        ...payload
      }
    default:
      return state;
  };
};
