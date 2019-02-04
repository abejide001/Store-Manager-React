/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '../../src/components/Login';

describe('<Login />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Login />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
