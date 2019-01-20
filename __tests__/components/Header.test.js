/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../src/components/layouts/Header';

describe('<Header />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Header />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
