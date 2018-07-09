import { NEW_LOC, DEFAULT_LOC } from './actions';

export default function testDragReducer(state = 'chicken', { type, payload }) {
    switch (type) {
        case DEFAULT_LOC:
            return {
                ...state,
                items: [...payload.items]
            }
        case NEW_LOC:
        	return{
        		...state,
        		items: [...payload.items],
        		selected: payload.selected
        	}
        default:
        	return state
    }
}