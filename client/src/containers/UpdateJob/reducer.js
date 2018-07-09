import { UPDATEJOB_FAILED, UPDATEJOB_SUCCESS, UPDATEJOB_CLEAR } from './actions';

// There's only a case for failed signup here, because a sucessful signup dispatches
// an action of a type LOGIN_SUCCESS. The loginReducer will pick up on this dispatched
// LOGIN_SUCCESS, and log them in. Basically the signUpReducer is only responsible for
// listening to dispatched errors for unsuccessful logins.
export default function addJobReducer(state = '', { type, payload }) {
  switch(type) {
    case UPDATEJOB_FAILED:
      return {
        ...state,
        ...payload,
        addJob: {
          status: true
        }
      }
    case UPDATEJOB_SUCCESS:
      return {
        ...state,
        addJob: {
          status: true,
          error: false
        }
      }
    case UPDATEJOB_CLEAR:
      return {
        ...state,
        addJob: {
          status: false,
          error: false
        }
      }
    default:
      return state
  }
};
