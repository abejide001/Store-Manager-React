/* eslint-disable no-undef */
import { loginUser, setCurrentUser } from '../../src/actions/authActions';
import { SET_CURRENT_USER } from '../../src/actions/types';

describe('Test Auth Actions', () => {
  it('should return an action', () => {
    const action = loginUser();
    expect(action).toBeDefined();
  });
  it('should return an action with SET_CURRENT_USER', () => {
    const action = setCurrentUser();
    expect(action).toEqual({ type: SET_CURRENT_USER });
    expect(action.payload).toBeUndefined();
    expect(action).toBeDefined();
  });
});
