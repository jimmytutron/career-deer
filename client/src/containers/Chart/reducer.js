import { CHART_ALL } from './actions';

//For testing default output.
// const CHART_ALL = undefined;

export default function chartReducer(state = '', { type, payload }) {

  switch (type) {
    case CHART_ALL:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}


