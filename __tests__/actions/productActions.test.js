/* eslint-disable no-undef */
import moxios from 'moxios';
import store from '../../src/store';
import { GET_PRODUCTS } from '../../src/actions/types';
import { getProducts } from '../../src/actions/productActions';

beforeEach(() => {
  moxios.install();
});
afterEach(() => {
  moxios.uninstall();
});
