/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { Login } from '../../src/components/Login';
import Footer from '../../src/components/layouts/Footer';

describe('<Login />', () => {
  describe('render()', () => {
    const props = {
      loginUser: jest.fn(),
      auth: jest.mock(),
      error: jest.mock(),
      history: { push: jest.fn() },
    };
    it('shouldn render the component', () => {
      const wrapper = shallow(<Login {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should contain a Footer component ', () => {
      const wrapper = mount(<MemoryRouter><Login {...props} /></MemoryRouter>);
      expect(wrapper.find(Footer).length).toEqual(1);
    });
    it('has a text area user can type in ', () => {
      const wrapper = mount(<MemoryRouter><Login {...props} /></MemoryRouter>);
      wrapper.find('input').at(0).simulate('change', {
        target: { value: 'a' },
      });
      wrapper.update();
      expect(wrapper.find('input').at(0).prop('value')).toEqual('');
    });
    it('calls handleSubmit()', () => {
      const wrapper = shallow(<Login {...props} />);
      const event = Object.assign(jest.fn(), { preventDefault: () => {} });
      sinon.spy(wrapper.instance(), 'handleSubmit');
      wrapper.instance().handleSubmit(event);
      expect(wrapper.instance().handleSubmit.calledOnce)
        .toEqual(true);
      expect(wrapper.instance().handleSubmit.calledWith(event));
    });
  });
});
