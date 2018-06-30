import { UPDATE_APP } from '../actions/app-action'

export default function appReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_APP:
      return payload.app
    default:
      return state;
  }
}
