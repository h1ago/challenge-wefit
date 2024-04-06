import type { CartItem, CartState, Product } from '@/types';

export const updateCartItemQuantity = (
  productId: number,
  cartItems: CartItem[],
  action: 'increment' | 'decrement',
): CartItem[] => {
  const modifier = action === 'increment' ? 1 : -1;

  return cartItems.map((item) =>
    item.product.id === productId
      ? { ...item, quantity: Math.max(1, item.quantity + modifier) }
      : item,
  );
};

export const updateCart = (product: Product, state: CartState): CartState => {
  const existingItem = state.cartItems.find(
    (item) => item.product.id === product.id,
  );

  if (existingItem) {
    const updatedCartItems = updateCartItemQuantity(
      product.id,
      state.cartItems,
      'increment',
    );
    return { cartItems: updatedCartItems };
  }

  return {
    cartItems: [...state.cartItems, { product, quantity: 1 }],
  };
};

export const removeItem = (
  productId: number,
  cartItems: CartItem[],
): CartItem[] => cartItems.filter((item) => item.product.id !== productId);

export const countQuantity = (
  productId: number,
  cartItems: CartItem[],
): number =>
  cartItems.find((item) => item.product.id === productId)?.quantity ?? 0;
