import type { Order, OrderRequest } from "../types/orders";
import apiClient from "./api-client";

export const orderService = {
  async getOrders(): Promise<Order[]> {
    return await apiClient.get<Order[]>("/orders/user");
  },

  async getOrderById(id: string): Promise<Order> {
    return await apiClient.get<Order>(`/orders/${id}`);
  },

  async createOrder(order: Partial<OrderRequest>): Promise<Order> {
    return await apiClient.post<Order>("/orders", order);
  },

  async updateOrderStatus(id: string, status: string): Promise<Order> {
    return await apiClient.put<Order>(
      `/orders/${id}/status?status=${status}`,
      {},
    );
  },

  async deleteOrder(id: string): Promise<string> {
    return await apiClient.delete<string>(`/orders/${id}`);
  },
};
