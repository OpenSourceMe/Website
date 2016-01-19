import { combineReducers } from 'redux'
import {numbs} from './numbsReducer'
import {server} from './serverReducer'

export const reducer = combineReducers({
	numbs,
	server
})

