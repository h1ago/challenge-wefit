import { act, renderHook } from '@testing-library/react';
import { useCartStore } from './useCartStore';
import type { CartItem, Product } from '@/types';

describe('Cart actions', () => {
  const initialStoreState = useCartStore.getState();
  const product: Product = {
    id: 1,
    title: 'Product',
    price: 20,
    image: '',
  };

  beforeEach(() => {
    useCartStore.setState(initialStoreState, true);
  });

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCartStore());
    expect(result.current.cartItems).toEqual([]);

    act(() => result.current.addItemToCart(product));
    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].product.id).toEqual(product.id);
  });

  it('should increment item quantity when it exists on cart', () => {
    const cartItem: CartItem = {
      product,
      quantity: 5,
    };
    useCartStore.setState({ ...initialStoreState, cartItems: [cartItem] });

    const { result } = renderHook(() => useCartStore());
    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].quantity).toBe(cartItem.quantity);

    act(() => result.current.addItemToCart(product));
    act(() => result.current.addItemToCart(product));
    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].quantity).toBe(cartItem.quantity + 2);
  });

  it('should increment item quantity in cart', () => {
    const cartItem: CartItem = {
      product: { ...product, id: 2 },
      quantity: 5,
    };

    useCartStore.setState({ ...initialStoreState, cartItems: [cartItem] });
    const { result } = renderHook(() => useCartStore());
    expect(result.current.cartItems[0].product.id).toBe(2);
    expect(result.current.cartItems[0].quantity).toBe(cartItem.quantity);

    act(() => result.current.incrementItemQuantity(2));
    act(() => result.current.incrementItemQuantity(2));

    expect(result.current.cartItems[0].quantity).toBe(cartItem.quantity + 2);
  });

  it('should decrement item quantity in cart', () => {
    const cartItem: CartItem = {
      product: { ...product, id: 3 },
      quantity: 4,
    };

    useCartStore.setState({ ...initialStoreState, cartItems: [cartItem] });
    const { result } = renderHook(() => useCartStore());
    expect(result.current.cartItems[0].product.id).toBe(3);
    expect(result.current.cartItems[0].quantity).toBe(cartItem.quantity);

    act(() => result.current.decrementItemQuantity(3));
    act(() => result.current.decrementItemQuantity(3));
    expect(result.current.cartItems[0].quantity).toBe(cartItem.quantity - 2);
  });

  it('should not decrement quantity below 1', () => {
    const cartItem: CartItem = {
      product: { ...product, id: 3 },
      quantity: 1,
    };

    useCartStore.setState({ ...initialStoreState, cartItems: [cartItem] });
    const { result } = renderHook(() => useCartStore());
    expect(result.current.cartItems[0].product.id).toBe(3);
    expect(result.current.cartItems[0].quantity).toBe(cartItem.quantity);

    act(() => result.current.decrementItemQuantity(3));
    act(() => result.current.decrementItemQuantity(3));
    act(() => result.current.decrementItemQuantity(3));
    expect(result.current.cartItems[0].quantity).toBe(1);
  });

  it('should remove item from cart', () => {
    const cartItem1: CartItem = {
      product: { ...product, id: 4 },
      quantity: 3,
    };

    const cartItem2: CartItem = {
      product: { ...product, id: 5 },
      quantity: 1,
    };

    useCartStore.setState({
      ...initialStoreState,
      cartItems: [cartItem1, cartItem2],
    });
    const { result } = renderHook(() => useCartStore());
    expect(result.current.cartItems).toHaveLength(2);
    expect(result.current.cartItems[0].product.id).toBe(4);

    act(() => result.current.removeItemFromCart(4));
    expect(result.current.cartItems[0].product.id).toBe(5);
  });

  it('should clear cart', () => {
    const cartItem1: CartItem = {
      product: { ...product, id: 4 },
      quantity: 3,
    };

    const cartItem2: CartItem = {
      product: { ...product, id: 5 },
      quantity: 1,
    };

    useCartStore.setState({
      ...initialStoreState,
      cartItems: [cartItem1, cartItem2],
    });
    const { result } = renderHook(() => useCartStore());
    expect(result.current.cartItems).toHaveLength(2);

    act(() => result.current.clearCart());
    expect(result.current.cartItems).toHaveLength(0);
  });

  it('should return correct cart item count', () => {
    const cartItem1: CartItem = {
      product: { ...product, id: 11 },
      quantity: 3,
    };

    const cartItem2: CartItem = {
      product: { ...product, id: 22 },
      quantity: 8,
    };

    useCartStore.setState({
      ...initialStoreState,
      cartItems: [cartItem1, cartItem2],
    });
    const { result } = renderHook(() => useCartStore());

    expect(result.current.getCartItemCount(22)).toBe(8);
    expect(result.current.getCartItemCount(11)).toBe(3);
  });
});
