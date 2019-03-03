/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import Home from './components/Home';
import store from './store';
import Login from './components/Login';
import Admin from './components/AdminPage';
import Private from './common/Private';
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import Register from './components/Register';

if (localStorage.authToken) {
  setAuthToken(localStorage.authToken);
  const decoded = jwt_decode(localStorage.authToken);
  store.dispatch(setCurrentUser(decoded));
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <Private exact path="/admin" component={Admin} />
            <Private exact path="/edit-product" component={EditProduct} />
            <Private exact path="/add-product" component={AddProduct} />
            <Private exact path="/register" component={Register} />
          </Switch>
        </Provider>
      </div>
    );
  }
}
