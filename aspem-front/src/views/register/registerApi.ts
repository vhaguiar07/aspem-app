import axios from 'axios';
import { RegisterUserData } from './types';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});
const API_URL = 'http://localhost:8080/autarquias';

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

export const searchByNomeSocioOrCpf = async (nomeSocio?: string, cpf?: string, limit = 10, page = 1) => {
  const params = new URLSearchParams();

  if (nomeSocio) {
    params.append('nomeSocio', nomeSocio);
  }

  if (cpf) {
    params.append('cpf', cpf);
  }

  params.append('limit', limit.toString());
  params.append('page', page.toString());

  const response = await axios.get(`${API_URL}/search`, {
    params,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  return response.data;
};
