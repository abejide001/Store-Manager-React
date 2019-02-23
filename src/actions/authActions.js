/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_USER_ERROR, SET_CURRENT_USER } from './types';
import Notify from '../utils/Notify';
import basePath from '../utils/basePath';

// eslint-disable-next-line import/prefer-default-export
export const setUserError = error => ({
  type: GET_USER_ERROR,
  payload: error,
});
export const loginUser = (userData, history) => (dispatch) => {
  axios.post(`${basePath}/auth/signin`, userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('authToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      decoded.userId === 'admin' ? history.push('/admin') : history.push('/attendant');
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch(setUserError(err.response.data.message));
      Notify.notifyError(err.response.data.message);
    });
};
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('authToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
