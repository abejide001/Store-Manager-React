/* eslint-disable no-undef */
import axios from 'axios';
import {
  GET_PRODUCTS, DELETE_PRODUCT, GET_ERRORS, EDIT_PRODUCT,
} from './types';
import basePath from '../utils/basePath';

// eslint-disable-next-line import/prefer-default-export
export const getProducts = () => (dispatch) => {
  axios.get(`${basePath}/products`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err.response.data));
};
export const deleteProduct = id => (dispatch) => {
  axios.delete(`${basePath}/products/${id}`)
    .then(() => {
      window.location.reload();
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const editProduct = (id, productData) => (dispatch) => {
  axios.put(`${basePath}/products/${id}`, productData)
    .then((res) => {
      window.location.replace('/admin');
      dispatch({
        type: EDIT_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err)
    });
};
