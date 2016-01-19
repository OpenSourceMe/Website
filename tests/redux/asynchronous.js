import {expect} from 'chai'

import mockStore from '../mocks/store'
import * as actions from '../../src/redux/actions/actions'

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