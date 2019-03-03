import {
  GET_ALL_SALES_FAILURE,
  GET_ALL_SALES_REQUEST,
  GET_ALL_SALES_SUCCESS,
} from '../actions/types';

const initialState = {
  sales: [],
  isFetching: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SALES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ALL_SALES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sales: action.payload,
      };
    case GET_ALL_SALES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
