import { VIEWJOBS_SUCCESS, VIEWJOBS_RESET, VIEWJOBS_EDIT } from './actions';

export default function viewJobsReducer(state = '', { type, payload }) {

  switch (type) {
    case VIEWJOBS_SUCCESS:
      return {
        ...state,
        ...payload,
        viewJobs: {
          status: false
        }
      }
    case VIEWJOBS_RESET:
      return {
        ...state,
        viewJobs: {
          status: false,
          data: []
        }
      }
    case VIEWJOBS_EDIT:
      const newState = {
        ...state,
        viewJobs: {
          status: true,
        }
      }
      newState.updateJob.job = payload.edit
      return newState;
    default:
      return state;
  }
}

