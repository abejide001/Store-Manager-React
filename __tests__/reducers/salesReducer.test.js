/* eslint-disable no-undef */
import {
  GET_ALL_SALES_FAILURE,
  GET_ALL_SALES_REQUEST,
  GET_ALL_SALES_SUCCESS,
} from '../../src/actions/types';
import { salesData } from '../components/mockData';
import salesReducer from '../../src/reducers/salesReducer';

describe('Product Reducer', () => {
  it('should handle action handle action of type GET_SALES', () => {
    const action = {
      type: GET_ALL_SALES_SUCCESS,
      payload: salesData.sales.value,
    };
    const newState = salesReducer([], action);
    expect(newState.sales).toEqual(salesData.sales.value);
  });
  it('should handle actions with unknown type', () => {
    const newState = salesReducer([], { type: 'LADASDASDSF' });
    expect(newState).toEqual([]);
  });
  it('should handle action ADD PRODUCT REQUEST', () => {
    const action = {
      type: GET_ALL_SALES_REQUEST,
    };
    const newState = salesReducer({}, action);
    expect(newState).toEqual({
      isFetching: true,
    });
  });
  it('should handle action ADD PRODUCT ERROR', () => {
    const action = {
      type: GET_ALL_SALES_FAILURE,
      error: 'error',
    };
    const newState = salesReducer({}, action);
    expect(newState.isFetching).toEqual(false);
  });
});
