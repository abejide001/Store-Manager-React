import { GET_PRODUCTS, EDIT_PRODUCT, DELETE_PRODUCT } from '../actions/types';

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
    default:
      return state;
  }
}
