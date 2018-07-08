import { SEARCH_SUCCESS } from './actions';

export default function searchReducer(state = '', { type, payload }) {

  switch (type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

