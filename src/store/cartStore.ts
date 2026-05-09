import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStore } from "../types/cart";

import { cartService } from "../services/cart.service";
import type { Product } from "../types/product";

const isAuthenticated = () => {
  return !!localStorage.getItem("access_token");
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      fetchCart: async () => {
        try {
          if (!isAuthenticated()) return;

          const data = await cartService.getCart();

          set({
            items: data.items,
          });
        } catch (error) {
          console.error("Fetch cart failed", error);
        }
      },

      addToCart: async (item) => {
        try {
          // LOGGED IN USER
          if (isAuthenticated()) {
            const data = await cartService.addToCart(item.product);

            set({
              items: data.items,
            });

            return;
          }

          // GUEST USER
          set((state) => {
            const exists = state.items.find(
              (i) => i.product.id === item.product.id,
            );

            if (exists) {
              return {
                items: state.items.map((i) =>
                  i.product.id === item.product.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i,
                ),
              };
            }

            return {
              items: [...state.items, { ...item, quantity: 1 }],
            };
          });
        } catch (error) {
          console.error("Add to cart failed", error);
        }
      },

      increaseQty: async (product: Product) => {
        try {
          // LOGGED IN
          if (isAuthenticated()) {
            const data = await cartService.addToCart(product);

            set({
              items: data.items,
            });

            return;
          }

          // GUEST
          set((state) => ({
            items: state.items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: i.quantity + 1 }
                : i,
            ),
          }));
        } catch (error) {
          console.error("Increase qty failed", error);
        }
      },

      decreaseQty: async (product: Product) => {
        try {
          // LOGGED IN
          if (isAuthenticated()) {
            const data = await cartService.decreaseItem(product);

            set({
              items: data.items,
            });

            return;
          }

          // GUEST
          set((state) => ({
            items: state.items
              .map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity - 1 }
                  : i,
              )
              .filter((i) => i.quantity > 0),
          }));
        } catch (error) {
          console.error("Decrease qty failed", error);
        }
      },

      removeFromCart: async (product: Product) => {
        try {
          // LOGGED IN
          if (isAuthenticated()) {
            const data = await cartService.removeItem(product.id);

            set({
              items: data.items,
            });

            return;
          }

          // GUEST
          set((state) => ({
            items: state.items.filter((i) => i.product.id !== product.id),
          }));
        } catch (error) {
          console.error("Remove failed", error);
        }
      },

      clearCart: async () => {
        try {
          // LOGGED IN
          if (isAuthenticated()) {
            await cartService.clearCart();
          }

          set({
            items: [],
          });
        } catch (error) {
          console.error("Clear cart failed", error);
        }
      },
    }),
    {
      name: "guest-cart",
    },
  ),
);
