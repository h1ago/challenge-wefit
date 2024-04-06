export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}
