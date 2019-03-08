import { JestEnvironment } from "@jest/environment";

export const productData = {
  products: [{
    id: 3,
    name: 'air max',
    price: 12000,
    quantity_in_inventory: 3,
    product_image: 'https://image.com',
  },
  {
    id: 4,
    name: 'air 12',
    price: 15000,
    quantity_in_inventory: 3,
    product_image: 'https://image.com',
  },
  ],
};
export const salesData = {
  sales: {
    value: { id: 1, product_name: 'laptop', quantity_sold: 10 },
  },
};
export const headerProps = {
  auth: {
    isAuthenticated: true,
    user: {
      userId: null,
    }
  },
  logoutUser: jest.fn()
}
