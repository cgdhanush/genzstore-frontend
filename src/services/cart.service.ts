

import type { Cart } from "../types/cart";
import type { Product } from "../types/product";

import apiClient from "./api-client";

export const cartService = {
  async getCart(): Promise<Cart> {
    return await apiClient.get<Cart>("/cart");
  },

  async addToCart(product: Product): Promise<Cart> {
    return await apiClient.post<Cart>("/cart/add", {
      product,
      quantity: 1,
    });
  },

  async decreaseItem(product: Product): Promise<Cart> {
    return await apiClient.put<Cart>("/cart/decrease", {
      product,
      quantity: 1,
    });
  },

  async removeItem(productId: string): Promise<Cart> {
    return await apiClient.delete<Cart>(`/cart/item/${productId}`);
  },

  async clearCart(): Promise<void> {
    await apiClient.delete("/cart/clear");
  },
};