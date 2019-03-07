/* eslint-disable no-undef */
import {
  GET_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_ERROR,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_TO_CART,
  DELETE_CART_PRODUCT,
} from '../actions/types';

let newCart = [];

if (localStorage.getItem('userCart')) {
  const cart = JSON.parse(localStorage.getItem('userCart'));
  newCart = [...cart];
}
const initialState = {
  loading: false,
  products: [],
  product: {},
  cart: newCart,
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
    case ADD_TO_CART:
      newCart = state.cart;
      if (!newCart.find(o => o.id === action.payload.id)) {
        action.payload.cartQty = 1;
        newCart.push(action.payload);
      } else {
        const position = newCart.findIndex(elem => (elem.id === action.payload.id));

        if (newCart[position].quantity > 0) {
          newCart[position].cartQty += 1;
          newCart[position].quantity -= 1;
        }
      }
      localStorage.setItem('userCart', JSON.stringify(newCart));

      return {
        ...state,
        cart: newCart,
      };
    case DELETE_CART_PRODUCT:
      localStorage.setItem('userCart', JSON.stringify(action.payload));
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
