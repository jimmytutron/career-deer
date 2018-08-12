import { VIEWJOBS_SUCCESS, VIEWJOBS_RESET } from './actions';
import initialState from '../../initialState';

export default function viewJobsReducer(state = initialState, { type, payload }) {

  switch (type) {
    case VIEWJOBS_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case VIEWJOBS_RESET:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

