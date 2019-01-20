/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeBody from '../../src/components/layouts/HomeBody';

describe('<HomeBody />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<HomeBody />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
