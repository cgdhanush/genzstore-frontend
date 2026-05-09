import apiClient from "./api-client";

//
// REGISTER
//
export type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  access_token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export async function register(data: RegisterData) {
  return apiClient.post<RegisterResponse>("/auth/signup", data);
}

//
// LOGIN
//
export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export async function login(data: LoginData) {
  return apiClient.post<LoginResponse>("/auth/login", data);
}

//
// LOGOUT
//
export type LogoutResponse = {
  message: string;
};

export async function logout() {
  return apiClient.post<LogoutResponse>("/auth/logout");
}