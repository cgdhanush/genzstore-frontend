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

    // Attach token automatically
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  // GET
  async get<T>(url: string) {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  // POST
  async post<T>(url: string, data?: unknown) {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  // PUT
  async put<T>(url: string, data?: unknown) {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  // DELETE
  async delete<T>(url: string) {
    const response = await this.client.delete<T>(url);
    return response.data;
  }

  async getBlob(url: string) {
    const response = await this.client.get(url, {
      responseType: "blob",
    });

    return response.data;
  }
}

export default new APIClient();
