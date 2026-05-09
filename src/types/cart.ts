export type  CartItem = {
  id: number;
  name: string;
  price: number;
  imageId: string;
  qty: number;
};

export type CartStore = {
  items: CartItem[];

  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
};
