/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../src/components/layouts/Footer';

describe('<Footer />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Footer />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
