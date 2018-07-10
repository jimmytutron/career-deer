import { LOGIN } from '../actions/login-form-actions';
import initialState from '../../initialState';

export default function testReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return payload.test
    default:
      return state;
  }
};
