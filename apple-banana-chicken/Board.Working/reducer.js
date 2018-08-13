import { MOVE_JOB, DELETE_JOB, JOBS_SUCCESS, JOBS_FAIL } from './actions';
import initialState from '../../initialState';
import mapData from './data-mapper';

export function grabJobsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case JOBS_SUCCESS:
      return {
        ...state,
        ...mapData(payload)
      }
    case JOBS_FAIL:
      return {
        ...state,
      }
    case MOVE_JOB:
      return {
        ...state,
        ...payload
      }
    case DELETE_JOB:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};

