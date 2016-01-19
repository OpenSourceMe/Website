
import thunk from 'redux-thunk'
import Promise from 'bluebird'
import Backend from '../backend'

let theBackend = new Backend()

/* synchronous actions */
/* *************************** */

export const ADD_RAND_NUMB = 'ADD_RAND_NUMB'
export const addRandNumb = () => {
	return({
		type: ADD_RAND_NUMB,
		numb: Math.round(Math.random()*100),
		colour: "default"
	})
}

export const CHANGE_NUMB_COLOUR = 'CHANGE_NUMB_COLOUR'
export const changeNumbColour = (index, colour) => {
	return ({
		type: CHANGE_NUMB_COLOUR,
		index: index,
		colour: colour
	})
}

/* *************************** */

/* error actions */
/* *************************** */
export const SERVER_SUCCESS = 'SERVER_SUCCESS'
export const serverSuccess = () => {
	return {
		type: SERVER_SUCCESS
	}
}

export const SERVER_ERROR = 'SERVER_ERROR'
export const serverError = (error) => {
	return {
		type: SERVER_ERROR,
		error
	}
}

export const RESET_STATUS = 'RESET_STATUS'
export const resetStatus = () => {
	return {
		type: RESET_STATUS
	}
}

export const RESET_ERROR = 'RESET_ERROR'
export const resetError = () => {
	return {
		type: RESET_ERROR
	}
}

/* *************************** */

/* backend actions */
/* *************************** */

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const login = (username, password) => {
	return dispatch => {
		// loginToParse
		theBackend.login(username,password).then(state => {
			return dispatch({
				type: LOGIN_SUCCESS,
				state: state
			})
		}).catch(error => {
			return dispatch({
				type: LOGIN_ERROR,
				error: error
			})
		})
	}
}


/* ************************* */
