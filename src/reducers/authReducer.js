import { SET_CURRENT_USER, GET_USER_ERROR, SET_USER_REQUEST } from '../actions/types';
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
    case SET_USER_REQUEST:
      return {
        ...state,
        isLogging: true,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLogging: false,
      };
    default:
      return state;
  }
}
