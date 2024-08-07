import axios from 'axios';
import { User } from './types';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetchUsers = async (url: string): Promise<User[]> => {
  const response = await api.get(url);
  return response.data;
};
