import {
	ADD_RAND_NUMB
} from './actions'

/* paragraph reducer */

const initialState = []

export const numbs = (state = initialState, action) => {

	let newState = state.slice()

	switch(action.type) {

	case ADD_RAND_NUMB:
		newState.push({
			number: action.numb
		})
		return newState

	default:
		return state

	}
}
