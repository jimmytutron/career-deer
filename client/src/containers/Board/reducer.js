import { MOVE_JOB, DELETE_JOB, JOBS_SUCCESS, JOBS_FAIL, JOBBOARD_LOAD_SUCCESS, JOBBOARD_LOAD_RESET } from './actions';
import initialState from '../../initialState';

export function jobBoardReducer(state = initialState, {type, payload}) {
  switch (type) {
    case JOBBOARD_LOAD_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case JOBBOARD_LOAD_RESET:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

export function grabJobsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case JOBS_SUCCESS:
      return {
        ...state,
        ...payload
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

