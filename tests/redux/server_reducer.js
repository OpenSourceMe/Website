import {expect} from 'chai'

import {server} from '../../src/redux/reducers/server'
import * as actionTypes from '../../src/redux/actions/actions'

describe('server error ACs', () => {

	let initialState
	beforeEach(() => {
		const action = {
			type: 'dummy'
		}
		initialState = server(undefined, action)
	})

	it('serverSuccess', () => {
		let next = server(initialState, actionTypes.serverSuccess())

		expect(next.status).to.equal(1)
	})

	it('serverError', () => {
		let next = server(initialState, actionTypes.serverError('specific error message'))

		expect(next.status).to.equal(2)
		expect(next.serverError).to.equal('specific error message')
	})

	it('userError', () => {
		let next = server(initialState, actionTypes.userError('specific error message'))

		expect(next.status).to.equal(2)
		expect(next.userError).to.equal('specific error message')
	})

	it('loginError', () => {
		let next = server(initialState, {
			type: actionTypes.LOGIN_ERROR,
			error: 'specific error message'
		})

		expect(next.status).to.equal(2)
		expect(next.serverError).to.equal('specific error message')
	})

	it('loginSuccess', () => {
		let next = server(initialState, {
			type: actionTypes.LOGIN_SUCCESS
		})

		expect(next.status).to.equal(0)
		expect(next.loggedIn).to.equal(true)
		expect(next.serverError).to.equal(null)
		expect(next.userError).to.equal(null)
	})


})
