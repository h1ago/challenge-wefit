/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { Product } from '@/types';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import api from '@/services/api';
import Routes from './router';

const mock = new MockAdapter(api);

const product: Product = {
  id: 1,
  title: 'product 1',
  price: 9.99,
  image: '',
};

jest.mock('@/hooks/useCartStore', () => ({
  useCartStore: (state) =>
    state({
      cartItems: [{ product, quantity: 1 }],
      getCartItemCount: () => 1,
    }),
}));

const renderComponent = (path: string) => {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
    </MemoryRouter>,
  );
};

describe('renders correct component based on URL', () => {
  it('/', async () => {
    mock.onGet('/products').reply(200, [product]);
    renderComponent('/');
    await waitFor(() => {
      expect(screen.getByTestId('div-home')).toBeInTheDocument();
    });
  });

  it('/cart', () => {
    renderComponent('/cart');
    expect(screen.getByTestId('div-cart')).toBeInTheDocument();
  });
});
