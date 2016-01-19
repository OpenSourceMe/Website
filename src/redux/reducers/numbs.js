import {
	ADD_RAND_NUMB,
	CHANGE_NUMB_COLOUR
} from '../actions/actions'

/* paragraph reducer */

const initialState = []

export const numbs = (state = initialState, action) => {
	let newState = state.slice()
	
	switch(action.type) {

	case ADD_RAND_NUMB:
		newState.push({
			number: action.numb,
			colour: action.colour
		})
		return newState

	case CHANGE_NUMB_COLOUR:
		const oldNumb = newState[action.index]
		newState[action.index] = {...oldNumb, colour: action.colour}
		return newState

	default:
		return state

	}
}
