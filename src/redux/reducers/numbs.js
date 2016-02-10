/* synchronous actions */
/* *************************** */
const initialState = []

export const ADD_RAND_NUMB = 'numbs/ADD_RAND_NUMB'
export const addRandNumb = () => {
	return({
		type: ADD_RAND_NUMB,
		numb: Math.round(Math.random()*100),
		colour: "default"
	})
}

export const CHANGE_NUMB_COLOUR = 'numbs/CHANGE_NUMB_COLOUR'
export const changeNumbColour = (index, colour) => {
	return ({
		type: CHANGE_NUMB_COLOUR,
		index: index,
		colour: colour
	})
}

/* *************************** */

/* paragraph reducer */

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
		newState[action.index] = {
			...oldNumb,
			colour: action.colour
		};
		return newState

	default:
		return state

	}
}
