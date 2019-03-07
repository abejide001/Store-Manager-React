/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actionTypes from '../../src/actions/types';
import { loginUser, logoutUser, registerUser } from '../../src/actions/authActions';

describe('Login actions', () => {
  const mockStore = configureStore([thunk]);
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it(
    `dispatches LOGGING_IN action and LOGIN_SUCCESS action and 
    redirests to index page on logging in user`,
    (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: 'error',
        });
      });
      const expectedActions = [{
        type: actionTypes.SET_USER_REQUEST,
      }, {
        type: actionTypes.GET_USER_ERROR,
      }];
      const store = mockStore({});
      return store.dispatch(registerUser({
        fullname: 'sfdfdg',
        username: 'sfdfdfgdg',
        role: 'attendant',
        email: 'abejidefemi@gmail.com',
        password: 'abcde',
      }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    },
  );

  it(
    'dispatches LOGGING_IN action and LOGIN_FAILURE on login failure',
    (done) => {
      const response = {
        data: {
          message: 'vadddd',
        },
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: response.data.message,
        });
      });
      const expectedActions = [{
        type: actionTypes.SET_USER_REQUEST,
      },
      {
        type: actionTypes.GET_USER_ERROR,
      },
      ];
      const store = mockStore({});
      return store.dispatch(loginUser({ email: 'ababab@yahoo.com', password: 'kamama' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    },
  );
  it('should dispatch USER REQUEST and USER ERROR', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'The credentials you provided is incorrect',
        },
      });
    });
    const expectedActions = [
      {
        type: actionTypes.SET_USER_REQUEST,
      },
      {
        type: actionTypes.GET_USER_ERROR,
          payload: 'The credentials you provided is incorrect',
      }];
    const store = mockStore({});
    return store.dispatch(loginUser({ email: 'ababababab@yahoo.com', password: 'sfdsfdfd' }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch LOGOUT', () => {
    const expectedActions = [
      {
        type: actionTypes.SET_CURRENT_USER,
        payload: {},
      }];
    const store = mockStore({});
    store.dispatch(logoutUser({}))
        expect(store.getActions()).toEqual(expectedActions);
  });
});
