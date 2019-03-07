/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_USER_ERROR, SET_CURRENT_USER, SET_USER_REQUEST } from './types';
import Notify from '../utils/Notify';
import basePath from '../utils/basePath';


const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

const setUserError = error => ({
  type: GET_USER_ERROR,
  payload: error,
});
export const loginUser = userData => (dispatch) => {
  dispatch(setUserRequest());
  return axios.post(`${basePath}/auth/signin`, userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('authToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      decoded.userId === 'admin' ? window.location.replace('/admin') : window.location.replace('/attendant');
    })
    .catch((err) => {
      dispatch(setUserError(err.response.data.message));
      Notify.notifyError('ERROR', err.response.data.message);
    });
};

export const registerUser = userData => (dispatch) => {
  dispatch(setUserRequest());
  return axios.post(`${basePath}/auth/signup`, userData)
    .then((res) => {
      if (res.data.role === 'user') {
        window.location.replace('/login');
        localStorage.clear();
      }
    })
    .catch((err) => {
      dispatch(setUserError(err.response.data.message));
      Notify.notifyError('ERROR', err.response.data.message);
    });
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('authToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
