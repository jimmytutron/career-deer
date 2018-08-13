import { PASSWORD_UPDATE } from './actions';
import intialState from '../../initialState';

export default function pwUpdateReducer(state = intialState, { type, payload }) {

    switch (type) {
        case PASSWORD_UPDATE:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}