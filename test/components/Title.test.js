import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Title from '../../src/components/Title';

test('<Title /> component', t => {
  t.plan(1);
  const text = 'Welcome to My World';
  const title = shallow(<Title title={text} />);
  t.equal(text, title.find('h3').text(), 'renders title prop in h3');
});
