import { create } from "zustand";
import type { CartItem } from "../types/cartItem";

type CartStore = {
  items: CartItem[];

  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }

      return {
        items: [...state.items, { ...item, qty: 1 }],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i,
      ),
    })),

  decreaseQty: (id) =>
    set((state) => {
      const updatedItems = state.items
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0);

      return { items: updatedItems };
    }),

  clearCart: () => set({ items: [] }),
}));
