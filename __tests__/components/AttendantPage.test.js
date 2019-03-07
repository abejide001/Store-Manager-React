/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import props from '../__mocks__/attendantMock';
import { AttendantPage } from '../../src/components/AttendantPage';

let wrapper;
describe('Attendant component', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<AttendantPage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Name of the group', () => {
    let getProducts;
    beforeEach(() => {
      getProducts = sinon.stub(props, 'getProducts');
    });
    afterEach(() => {
      getProducts.reset();
    });
    it('should call component did moubt', () => {
      wrapper = shallow(<AttendantPage {...props} />);
      expect(getProducts.calledOnce).toBe(true);
    });
  });
  describe('Name of the group', () => {
    it('calls handleCartClick', () => {
      const product = {
        cart: {
          name: 'User',
          price: 'user@gmail.com',
          quantity_in_inventory: 1,
        },
      };
      wrapper = shallow(<AttendantPage {...props} />);
      sinon.spy(wrapper.instance(), 'handleCartClick');
      wrapper.instance().handleCartClick(product);
      expect(wrapper.instance().handleCartClick.calledOnce)
        .toEqual(true);
      expect(wrapper.instance().handleCartClick.calledWith(product));
    });
    it('calls handleChange', () => {
      const e = {
        target: {
          value: jest.fn(),
        },
      };
      wrapper = shallow(<AttendantPage {...props} />);
      sinon.spy(wrapper.instance(), 'handleChange');
      wrapper.instance().handleChange(e);
      expect(wrapper.instance().handleChange.calledOnce)
        .toEqual(true);
      expect(wrapper.instance().handleChange.calledWith(e));
    });
  });
});
