
export default function appReducer(state = 'app', { type, payload }) {
  switch(type) {
    case 'UPDATE_APP':
      return payload
    default:
     return state;
  }
}
