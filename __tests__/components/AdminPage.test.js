/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import store from '../../src/store';
import AdminPage from '../../src/components/AdminPage';
import { Admin } from '../../src/components/AdminPage';
import Footer from '../../src/components/layouts/Footer';

let wrapper;

it('should match snapshot', () => {
  wrapper = shallow(<AdminPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
describe('Mount methods', () => {
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><MemoryRouter><AdminPage /></MemoryRouter></Provider>);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('should find ul', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });
  it('should find link', () => {
    expect(wrapper.find('Link').length).toEqual(4);
  });
  it('should find footer', () => {
    expect(wrapper.find(Footer).length).toEqual(1);
  });
  it('should find h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
  it('should render the correct h1 text', () => {
    expect(wrapper.find('h1').render().text()).toContain('Products');
  });
  describe('handle methods', () => {
    it('calls handleDelete()', () => {
      const props = {
        getProducts: jest.fn(),
        deleteProduct: jest.fn(),
        auth: jest.mock(),
        product: {
          products: {
            products: {
              value: ['ool', 'asfsfsf', 19000],
            },
          },
        },
      };
      wrapper = shallow(<Admin {...props} />);
      const id = 1;
      sinon.spy(wrapper.instance(), 'handleDelete');
      wrapper.instance().handleDelete(id);
      expect(wrapper.instance().handleDelete.calledOnce)
        .toEqual(true);
    });
  });
});
