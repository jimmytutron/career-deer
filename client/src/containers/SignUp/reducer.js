import initialState from '../../initialState';
import { SIGNUP_FAILED, SIGNUP_SUCCESS, SIGNUP_RESET, AUTH_SUCCESS, AUTH_FAILURE } from './actions';

export function signUpReducer(state = initialState, { type, payload }) {
  switch(type) {
    case SIGNUP_FAILED:
      return {
        ...state,
        ...payload
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case SIGNUP_RESET:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
};

export function googleAuthReducer(state = initialState, { type, payload }) {
  switch(type) {
    case AUTH_SUCCESS:
      return  {
        ...state,
        ...payload
      }
    case AUTH_FAILURE:
      return  {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};
