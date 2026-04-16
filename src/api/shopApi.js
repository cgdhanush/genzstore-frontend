import axios from "axios";
import API_BASE_URL from "../config";

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 7000,
});

export const fetchProducts = async () => {
  const { data } = await client.get("/products");
  return data;
};

export const syncCart = async (cartItems) => {
  const { data } = await client.post("/cart", { items: cartItems });
  return data;
};

export const createOrder = async (order) => {
  const { data } = await client.post("/orders", order);
  return data;
};

export const processPayment = async (payment) => {
  const { data } = await client.post("/payments", payment);
  return data;
};
