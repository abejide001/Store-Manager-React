import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import salesReducer from './salesReducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  sale: salesReducer,
});
