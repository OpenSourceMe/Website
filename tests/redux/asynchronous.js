import {expect} from 'chai'

import { paragraphs } from '../../redux/paragraphsReducer'
import { hints } from '../../redux/hintsReducer'

import mockStore from '../mocks/store'
import * as actions from '../../redux/actions'

describe('asynchronous ACs', () => {

	it('login', () => {
		const expectedActions = [
			{ type: actions.LOGIN_SUCCESS }
		]

		const initialState = {}

		const store = mockStore(initialState, expectedActions)
		return store.dispatch(actions.login('username', 'password'))
	})

	
	})
})