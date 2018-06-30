import { UPDATE_TEST } from '../actions/test-actions';

export default function testReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_TEST:
      return payload.test
    default:
      return state;
  }
};
