/* eslint-disable no-undef */
import axios from 'axios';
import {
  GET_ALL_SALES_FAILURE,
  GET_ALL_SALES_REQUEST,
  GET_ALL_SALES_SUCCESS,
} from './types';
import basePath from '../utils/basePath';
import Notify from '../utils/Notify';

export const setSalesError = error => ({
  type: GET_ALL_SALES_FAILURE,
  error,
});
const setSalesRequest = () => ({
  type: GET_ALL_SALES_REQUEST,
});
// eslint-disable-next-line import/prefer-default-export
export const getSales = () => (dispatch) => {
    dispatch(setSalesRequest())  
  axios.get(`${basePath}/sales`)
    .then((res) => {
      dispatch({
        type: GET_ALL_SALES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      Notify.notifyError(err.response.data.message);
    });
};
