import { FAILED_SIGNUP, SIGNUP_SUCCESS, RESET_SIGNUP, AUTH_SUCCESS } from './actions';
import initialState from '../../initialState';

export function signUpReducer(state = initialState, { type, payload }) {
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
    case RESET_SIGNUP:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
};

export function authTestReducer(state = initialState, { type, payload }) {
  switch(type) {
    case AUTH_SUCCESS:
      return  {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};
