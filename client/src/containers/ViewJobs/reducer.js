import { VIEWJOBS_SUCCESS, VIEWJOBS_RESET } from './actions';

export default function viewJobsReducer(state = '', { type, payload }) {

  switch (type) {
    case VIEWJOBS_SUCCESS:
      return {
        ...state,
        ...payload,
        viewJobs: {
          edit: null
        }
      }
    case VIEWJOBS_RESET:
      return {
        ...state,
        viewJobs: {
          edit: null,
          data: []
        }
      }
    case VIEWJOBS_EDIT:
      return {
        ...state,
        payload
      }
  }
}

