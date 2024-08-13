import axios from 'axios';
import { Customer } from './types';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetchCustomers = async (url: string): Promise<Customer[]> => {
  const response = await api.get(url);
  return response.data;
};
