const props = {
  getProducts: () => null,
  auth: {
    user: jest.fn()
  },
  product: {
    products: {
      products: {
        value: ['ool', 'ool'].filter(jest.fn()),
      },
    },
  },
};
export default props;
