import {
  GET_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_ERROR,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
} from '../actions/types';

const initialState = {
  loading: false,
  products: [],
  product: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        products: state.products.filter(product => product.id !== action.payload),
        loading: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isAdding: true,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAdding: false,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isAdding: false,
      };
    default:
      return state;
  }
}
