/* eslint-disable no-undef */
import axios from 'axios';
import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT_ERROR,
  EDIT_PRODUCT,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  ADD_TO_CART,
  DELETE_CART_PRODUCT,
} from './types';
import basePath from '../utils/basePath';
import Notify from '../utils/Notify';

export const setProductError = error => ({
  type: GET_PRODUCT_ERROR,
  payload: error,
});
// eslint-disable-next-line import/prefer-default-export
export const getProducts = () => dispatch => axios.get(`${basePath}/products`)
  .then((res) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  })
  .catch((err) => {
    Notify.notifyError(err.response.data.message);
  });
export const deleteProduct = id => dispatch => axios.delete(`${basePath}/products/${id}`)
  .then(() => {
    window.location.reload();
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  })
  .catch((err) => {
    dispatch(setProductError(err));
  });
export const editProduct = (id, productData) => dispatch => axios.put(`${basePath}/products/${id}`, productData)
  .then((res) => {
    window.location.replace('/admin');
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data,
    });
  })
  .catch((err) => {
    Notify.notifyError(err.response.data.message);
  });
const addProductRequest = () => ({
  type: ADD_PRODUCT_REQUEST,
});
const addProductSuccess = products => ({
  type: ADD_PRODUCT_SUCCESS,
  products,
});
const addProductError = error => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});
export const addProducts = productData => (dispatch) => {
  dispatch(addProductRequest());
  return axios.post(`${basePath}/products`, productData)
    .then((res) => {
      window.location.replace('/admin');
      dispatch(addProductSuccess(res.data));
    }).catch((err) => {
      dispatch(addProductError(err.response.data));
    });
};

export const addToCartAction = payload => ({
  type: ADD_TO_CART,
  payload,
});

export const addToCart = payload => (dispatch) => {
  dispatch(addToCartAction(payload));
};
export const cartUpdatedAfterDelete = payload => ({
  type: DELETE_CART_PRODUCT,
  payload,
});

export const removeFromCart = payload => (dispatch) => {
  dispatch(cartUpdatedAfterDelete(payload));
};
