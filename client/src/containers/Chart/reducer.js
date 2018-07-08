import { DATA_AVAIL } from './actions';

//For testing default output.
// const DATA_AVAIL = undefined;

export default function chartReducer(state = '', { type, payload }) {

  switch (type) {
    case DATA_AVAIL:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}


