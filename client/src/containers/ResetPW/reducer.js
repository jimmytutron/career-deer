import { PASSWORD_RESET } from './actions';
import intialState from '../../initialState';

export default function pwResetReducer(state = intialState, { type, payload }) {

    switch (type) {
        case PASSWORD_RESET:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}