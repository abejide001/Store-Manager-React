/* eslint-disable no-undef */
import productReducer from '../../src/reducers/productReducer';
import { 
  GET_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_ERROR,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_TO_CART,
} from '../../src/actions/types';
import { productData } from '../components/mockData';

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
  it('should action of type GET_PRODUCT_ERROR', () => {
    const action = {
      type: GET_PRODUCT_ERROR,
    };
    const newState = productReducer([], action);
    expect(newState.error).toBeUndefined();
  });
  it('should handle action ADD PRODUCT REQUEST', () => {
    const action = {
      type: ADD_PRODUCT_REQUEST,
    };
    const newState = productReducer({}, action);
    expect(newState).toEqual({
      isAdding: true,
    });
  });
  it('should handle action ADD PRODUCT ERROR', () => {
    const action = {
      type: ADD_PRODUCT_FAILURE,
      error: 'error',
    };
    const newState = productReducer({}, action);
    expect(newState.isAdding).toEqual(false);
  });
  it('should handle action ADD PRODUCT SUCCESS', () => {
    const action = {
      type: ADD_PRODUCT_SUCCESS,
    };
    const newState = productReducer([], action);
    expect(newState.isAdding).toEqual(false);
  });
});
