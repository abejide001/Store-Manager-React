const props = {
  getProducts: () => null,
  addToCart: () => null,
  auth: {
    user: jest.fn(),
  },
  product: {
    cart: ['dfdg'],
    products: {
      products: {
        value: ['ool', 'ool'].filter(jest.fn()),
      },
    },
  },
};
export default props;
