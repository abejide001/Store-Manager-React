/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import store from './store';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Provider>
      </div>
    );
  }
}
