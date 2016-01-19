import React from 'react';
import {renderIntoDocument} from 'react-addons-test-utils';

import {expect} from 'chai';

import setup_fake_dom from './setup_fake_dom';

let TestUtils = require('react-addons-test-utils');
let assert = require('assert');

import {LoginForm} from '../../components/LoginForm';

// CommonJS syntax is used for importing rewire for compatibility
// with babel-loader.
//
// See https://github.com/jhnns/rewire-webpack/issues/12#issuecomment-95797024
// for an explanation
let rewire = require('rewire');

describe('LoginForm', () => {
  it('should render', () => {
    const item = renderIntoDocument(
      <LoginForm test="has a prop"/>
    );
    expect(item.props.test).to.equal("has a prop")
  });
});