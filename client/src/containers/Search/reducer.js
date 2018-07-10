import { SEARCH_SUCCESS, SEARCH_SAVED_UPDATE } from './actions';
import initialState from '../../initialState';

export default function searchReducer(state = initialState, { type, payload }) {

  switch (type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case SEARCH_SAVED_UPDATE:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

