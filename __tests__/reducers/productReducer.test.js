/* eslint-disable no-undef */
import productReducer from '../../src/reducers/productReducer';
import { GET_PRODUCTS, EDIT_PRODUCT, DELETE_PRODUCT } from '../../src/actions/types';
import productData from '../components/mockData';

describe('Product Reducer', () => {
  it('should handle action handle action of type GET_PRODUCTS', () => {
    const action = {
      type: GET_PRODUCTS,
      payload: productData,
    };
    const newState = productReducer([], action);
    expect(newState.products).toEqual(productData);
  });
  it('should handle actions with unknown type', () => {
    const newState = productReducer([], { type: 'LADASDASDSF' });
    expect(newState).toEqual([]);
  });
  it('should handle action of type EDIT_PRODUCTS', () => {
    const action = {
      type: EDIT_PRODUCT,
      payload: productData,
    };
    const newState = productReducer(productData, action);
    expect(newState.products.length).toBe(3);
  });
  it('should handle action of type DELETE_PRODUCTS', () => {
    const action = {
      type: DELETE_PRODUCT,
      payload: 3,
    };
    const newState = productReducer(productData, action);
    expect(newState.products[0].id).toEqual(4);
  });
});
