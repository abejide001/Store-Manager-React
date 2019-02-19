const isEmpty = (value) => {
  // eslint-disable-next-line no-unused-expressions
  value === undefined
    || value === null
    || (typeof value === 'object' && Object.keys(value).length === 0)
    || (typeof value === 'string' && value.trim().length === 0);
};
export default isEmpty;
