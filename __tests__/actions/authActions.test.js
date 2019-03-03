/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actionTypes from '../../src/actions/types';
import { loginUser } from '../../src/actions/authActions';

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
          status: 200,
          response: {
            userId: 'user',
          },
        });
      });
      const expectedActions = [{
        type: actionTypes.SET_USER_REQUEST,
      }, {
        type: actionTypes.GET_USER_ERROR,
      }];
      const store = mockStore({});
      return store.dispatch(loginUser({
        email: 'user@gmail.com',
        password: 'adsdsfsfsf',
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
});
