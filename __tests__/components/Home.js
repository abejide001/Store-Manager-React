/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../../src/components/Home';

describe('<Home />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Home />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
