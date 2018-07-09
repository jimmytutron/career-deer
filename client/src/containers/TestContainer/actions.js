export const NEW_LOC = "NEW_LOC";
export const DEFAULT_LOC = "DEFAULT_LOC";

export function defaultLocation(data){
	return {
		type: DEFAULT_LOC,
		payload: data
	}
}

export function newLocation(data){
	return {
		type: NEW_LOC,
		payload: data
	}
}
