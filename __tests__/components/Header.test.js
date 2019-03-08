/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon'
import toJson from 'enzyme-to-json';
import { Header } from '../../src/components/layouts/Header';
import { headerProps } from './mockData';

describe('<Header />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Header {...headerProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('methods', () => {
    it('calls handleLogout', () => {
      const wrapper = shallow(<Header {...headerProps} />);
      sinon.spy(wrapper.instance(), 'handleLogout');
      wrapper.instance().handleLogout();
      expect(wrapper.instance().handleLogout.calledOnce)
        .toEqual(true);
    });
  });
});
