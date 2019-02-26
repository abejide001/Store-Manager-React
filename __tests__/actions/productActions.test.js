/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actionTypes from '../../src/actions/types';
import { getProducts, deleteProduct, editProduct, setProductError } from '../../src/actions/productActions';

describe('Product action', () => {
  const mockStore = configureStore([thunk]);
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  const product = [{
    products: [{
      id: 1,
      name: 'aaaa',
      price: 1000,
      product_image: 'aadadasdd',
      quantity_in_inventory: 20,
    }],
  }];
  it('should dispatch GET_PRODUCTS', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: product.products,
      });
    });
    const expectedActions = {
      type: actionTypes.GET_PRODUCTS,
      payload: product.products,
    };
    const store = mockStore({});
    return store.dispatch(getProducts())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions.type);
        done();
      });
  });
  it('should dispatch EDIT_PRODUCTS and GET_PRODUCT_ERROR', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: product.products,
      });
    });
    const expectedActions = {
      type: actionTypes.EDIT_PRODUCT,
      payload: product.products,
    };
    const store = mockStore({});
    return store.dispatch(editProduct())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions.type);
        done();
      });
  });
  it('should dispatch DELETE PRODUCT', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: product.products,
      });
    });
    const expectedActions = {
      type: actionTypes.DELETE_PRODUCT,
      payload: product.products,
    };
    const store = mockStore({});
    return store.dispatch(deleteProduct())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions.type);
        done();
      });
  });
});
