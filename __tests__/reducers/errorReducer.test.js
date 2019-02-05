import errorReducer from '../../src/reducers/errorReducer';

it('should return default values', () => {
  const state = errorReducer({}, { type: '@@INIT' });
  expect(state).toEqual({});
});
