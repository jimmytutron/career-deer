import { LOGIN } from '../actions/login-form-actions';

export default function testReducer(state = '', { type, payload }) {
  switch (type) {
    case LOGIN:
      return payload.test
    default:
      return state;
  }
};
