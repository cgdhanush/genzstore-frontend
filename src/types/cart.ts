import type { Product } from "./product";

export interface Cart {
  id: string;
  items: CartItem[];
}

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartStore = {
  items: CartItem[];
  fetchCart: () => Promise<void>;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (p: Product) => void;
  increaseQty: (p: Product) => void;
  decreaseQty: (p: Product) => void;
  clearCart: () => void;
};