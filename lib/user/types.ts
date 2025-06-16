export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponseData {
  token: string;
  user: User;
}

export interface LoginResponse {
  status: string;
  data: LoginResponseData;
} 