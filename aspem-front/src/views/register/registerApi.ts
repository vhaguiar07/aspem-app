import axios from 'axios';
import { RegisterUserData } from './types';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const registerUser = async (userData: RegisterUserData) => {
  try {
    const response = await axios.post('/users', userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.message || 'Erro desconhecido';
      throw new Error(errorMessage);
    }
    throw new Error('Erro desconhecido');
  }
};
