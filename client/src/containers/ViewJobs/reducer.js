import { VIEWJOBS_SUCCESS, VIEWJOBS_RESET, VIEWJOBS_EDIT } from './actions';
import initialState from '../../initialState';

export default function viewJobsReducer(state = initialState, { type, payload }) {

  switch (type) {
    case VIEWJOBS_SUCCESS:
      return {
        ...state,
        ...payload,
        edit: null
      }
    case VIEWJOBS_RESET:
      return {
        ...state,
        edit: null,
        data: []
      }
    case VIEWJOBS_EDIT:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

