import axios from 'axios';
import { RegisterUserData, RegisterResponse } from './types';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const registerUser = async (userData: RegisterUserData): Promise<RegisterResponse> => {
  const response = await api.post('/users', userData);
  return response.data;
};
