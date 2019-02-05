/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from '../../src/components/Login';

describe('<Login />', () => {
  describe('render()', () => {
    const props = {
      loginUser: jest.fn(),
      auth: jest.mock(),
      error: jest.mock(),
      history: { push: jest.fn() }
    }
    test('renders the component', () => {
      const wrapper = shallow(<Login {...props}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
