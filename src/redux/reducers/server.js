import Backend from '../backend'
import Promise from 'bluebird'

const theBackend = new Backend();

const initialState = {
	status: 0,
	loggedIn: false,
	serverError: null
}

/* error actions */
/* *************************** */
export const SERVER_SUCCESS = 'server/SERVER_SUCCESS'
export const serverSuccess = () => {
	return {
		type: SERVER_SUCCESS
	}
}

export const SERVER_ERROR = 'server/SERVER_ERROR'
export const serverError = (error) => {
	return {
		type: SERVER_ERROR,
		error
	}
}

export const RESET_STATUS = 'server/RESET_STATUS'
export const resetStatus = () => {
	return {
		type: RESET_STATUS
	}
}

export const RESET_ERROR = 'server/RESET_ERROR'
export const resetError = () => {
	return {
		type: RESET_ERROR
	}
}

/* *************************** */

/* backend actions */
/* *************************** */

export const LOGIN_SUCCESS = 'server/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'server/LOGIN_ERROR'
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

export const server = (state = initialState, action) => {

	// if (action == undefined) return state

	switch (action.type) {

		case SERVER_SUCCESS:
			return Object.assign({}, state, {
				status: 1,
				serverError: null
			})

		case SERVER_ERROR:
			return Object.assign({}, state, {
				status: 2,
				serverError: action.error
			})

		case LOGIN_SUCCESS:
			return {
				...state,
				loggedIn: true
			}

		case LOGIN_ERROR:
			return Object.assign({}, state, {
				status: 2,
				serverError: action.error
			})

		case RESET_STATUS:
			return Object.assign({}, state, {
				status: 0
			})

		case RESET_ERROR:
			return Object.assign({}, state, {
				serverError: null
			})

		default:
			return state
	}
}
