import { UPDATEJOB_FAILED, UPDATEJOB_SUCCESS, UPDATEJOB_CLEAR, UPDATEJOB_SELECT } from './actions';

// There's only a case for failed signup here, because a sucessful signup dispatches
// an action of a type LOGIN_SUCCESS. The loginReducer will pick up on this dispatched
// LOGIN_SUCCESS, and log them in. Basically the signUpReducer is only responsible for
// listening to dispatched errors for unsuccessful logins.
export default function updateJobReducer(state = '', { type, payload }) {
  switch(type) {
    case UPDATEJOB_FAILED:
      return {
        ...state,
        ...payload,
        status: false
      }
    case UPDATEJOB_SUCCESS:
      return {
        ...state,
        status: true,
        job: null,
        error: false
      }
    case UPDATEJOB_CLEAR:
      return {
        ...state,
        status: false,
        job: null,
        error: false
      }
    case UPDATEJOB_SELECT:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
};
