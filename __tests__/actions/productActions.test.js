/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actionTypes from '../../src/actions/types';
import {
  getProducts,
  deleteProduct,
  editProduct,
  addProducts,
  addToCart,
  cartUpdatedAfterDelete,
} from '../../src/actions/productActions';

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
  it('should dispatch GET PRODUCT ERROR', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          status: 'error',
          message: 'product not found',
        },
      });
    });
    const expectedActions = {
      type: actionTypes.GET_PRODUCT_ERROR,
      payload: {
        status: 'error',
        message: 'product not found',
      },
    };
    const store = mockStore({});
    return store.dispatch(deleteProduct())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions.type);
        done();
      });
  });
  it('should dispatch ADD_TO_CART', () => {
    const expectedActions = {
      type: actionTypes.ADD_TO_CART,
      payload: {
        id: 38,
        name: 'Air Vapor',
        price: 20000,
        quantity_in_inventory: 3,
        product_image: 'https://i.imgur.com/IQRaNLr.jpg',
        cartQty: 1,
      },
    };
    const store = mockStore({});
    store.dispatch(addToCart());
    expect(store.getActions()[0].type).toEqual(expectedActions.type);
  });
  it('should dispatch DELETE CART', () => {
    const expectedActions = {
      type: actionTypes.DELETE_CART_PRODUCT,
      payload: [],
    };
    const store = mockStore({});
    store.dispatch(cartUpdatedAfterDelete());
    expect(store.getActions()[0].type).toEqual(expectedActions.type);
  });
  it(`dispatches ADD_PRODUCT_REQUEST and
  ADD_PRODUCT_SUCCESS when adding a product`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: product.products,
      });
    });
    const expectedActions = [{
      type: actionTypes.ADD_PRODUCT_REQUEST,
    }, {
      type: actionTypes.ADD_PRODUCT_SUCCESS,
      products: product.products,
    },
    ];
    const store = mockStore({});
    return store.dispatch(addProducts())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it(`dispatches ADD_PRODUCT_REQUEST and
  ADD_PRODUCT_ERROR when adding a product`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: 'error',
      });
    });
    const expectedActions = [{
      type: actionTypes.ADD_PRODUCT_REQUEST,
    }, {
      type: actionTypes.ADD_PRODUCT_FAILURE,
      payload: 'error',
    },
    ];
    const store = mockStore({});
    return store.dispatch(addProducts())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
