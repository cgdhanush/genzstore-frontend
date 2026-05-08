import axios, { type AxiosInstance } from "axios";

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  // GET method
  async get<T>(url: string) {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  // PoST method
  async post<T>(url: string) {
    const response = await this.client.get<T>(url);
    return response.data;
  }
}

export default new APIClient();
