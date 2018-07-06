// import { FAILED_SIGNUP } from './actions';

// // There's only a case for failed signup here, because a sucessful signup dispatches
// // an action of a type LOGIN_SUCCESS. The loginReducer will pick up on this dispatched
// // LOGIN_SUCCESS, and log them in. Basically the signUpReducer is only responsible for
// // listening to dispatched errors for unsuccessful logins.
// export default function signUpReducer(state = '', { type, payload }) {
//   switch(type) {
//     case FAILED_SIGNUP:
//       return {
//         ...state,
//         ...payload
//       }
//     default:
//       return state
//   }
// };
