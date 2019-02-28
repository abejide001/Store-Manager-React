/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { sinon } from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import { AddProduct } from '../../src/components/AddProduct';

let wrapper;
describe('<EditProduct />', () => {
  describe('render()', () => {
    const props = {
      product: null,
      addProducts: jest.fn(),
    };
    beforeEach(() => {
      wrapper = mount(<MemoryRouter><AddProduct {...props} /></MemoryRouter>);
    });
    it('should have one form element', () => {
      expect(wrapper.find('form').length).toEqual(1);
    });
    it('should have three input element', () => {
      expect(wrapper.find('input').length).toEqual(5);
    });
    it('should have two link element', () => {
      expect(wrapper.find('Link').length).toBe(2);
    });
  });
  describe('method', () => {
    const props = {
      product: null,
      addProducts: jest.fn(),
    };
    it('calls handleSubmit()', () => {
      wrapper = mount(<MemoryRouter><AddProduct {...props} /></MemoryRouter>);
      const component = wrapper.find('AddProduct');
      const spy = jest.spyOn(component.instance(), 'handleSubmit');
      expect(component.find('#sendBtn').length).toBe(1);
      component.find('#sendBtn').simulate('submit');
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });
});
