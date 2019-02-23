import { SET_CURRENT_USER, GET_USER_ERROR } from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
