import type { CartState, Product } from '@/types';
import { create } from 'zustand';
import {
  countQuantity,
  removeItem,
  updateCart,
  updateCartItemQuantity,
} from './helpers';

interface CartActions {
  addItemToCart: (product: Product) => void;
  getCartItemCount: (id: number) => number;
  incrementItemQuantity: (id: number) => void;
  decrementItemQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState & CartActions>((set, get) => ({
  cartItems: [],
  addItemToCart: (product) => set((state) => updateCart(product, state)),
  getCartItemCount: (productId) => countQuantity(productId, get().cartItems),
  incrementItemQuantity: (productId) =>
    set((state) => ({
      cartItems: updateCartItemQuantity(
        productId,
        state.cartItems,
        'increment',
      ),
    })),
  decrementItemQuantity: (productId) =>
    set((state) => ({
      cartItems: updateCartItemQuantity(
        productId,
        state.cartItems,
        'decrement',
      ),
    })),
  removeItemFromCart: (productId) =>
    set((state) => ({
      cartItems: removeItem(productId, state.cartItems),
    })),
  clearCart: () => set(() => ({ cartItems: [] })),
}));
