import type { Product } from "./product";

export type OrderProduct = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  products: OrderProduct[];
  totalAmount: number;
  status: string;
  orderDate: Date;
};

export type OrderRequest = {
  products: OrderProduct[];
  totalAmount: number;
};
