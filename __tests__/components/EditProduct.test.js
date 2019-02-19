/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { EditProduct } from '../../src/components/EditProduct';
import Footer from '../../src/components/layouts/Footer';

let wrapper;
describe('<EditProduct />', () => {
  describe('render()', () => {
    beforeEach(() => {
      wrapper = shallow(<EditProduct />);
    });
    it('renders the component', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('', () => {
    beforeEach(() => {
      const props = {
        product: null,
        editProduct: jest.fn(),
        location: {
          search: {
            match: jest.fn()
          }
        }
      }
      wrapper = mount(
        <MemoryRouter><EditProduct {...props} /></MemoryRouter>
      );
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('should have a footer component', () => {
      expect(wrapper.find(Footer).length).toEqual(1);
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
    it('has an input with a name prop', () => {
      wrapper.find('.input1').simulate('change', {
        target: name,
      });
      wrapper.update();
      expect(wrapper.find('.input1').prop('name')).toEqual('name')
    })
    it('has an input with a name prop', () => {
      wrapper.find('.input2').simulate('change', {
        target: name,
      });
      wrapper.update();
      expect(wrapper.find('.input2').prop('name')).toEqual('price')
    })
    it('has an input with a name prop', () => {
      wrapper.find('.input3').simulate('change', {
        target: name,
      });
      wrapper.update();
      expect(wrapper.find('.input3').prop('name')).toEqual('quantity_in_inventory')
    })
    it('should empty the form on submit', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();
      expect(wrapper.find('.input1').prop('value')).toEqual('');
    });
  });
});
