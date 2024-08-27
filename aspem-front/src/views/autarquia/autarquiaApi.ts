import axios from 'axios';
import { Autarquia, FetchAutarquiasResponse } from './types';

const getToken = () => localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export const fetchAutarquias = async (url: string): Promise<FetchAutarquiasResponse> => {
  try {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios.get(url, { headers });
    console.log('Resposta da API:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar autarquias:', error.message);
      console.error('Detalhes do erro:', error.response?.data || error.response?.status);
    } else {
      console.error('Erro desconhecido:', error);
    }
    throw error;
  }
};

export const createAutarquia = async (autarquia: Autarquia) => {
  try {
    const response = await api.post('/autarquias/add', autarquia);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar autarquia:', error);
    throw error;
  }
};

export const getAutarquiaById = async (id: string): Promise<Autarquia> => {
  try {
    const response = await api.get(`/autarquias/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar autarquia por ID:', error);
    throw error;
  }
};

export const updateAutarquia = async (id: string, updatedData: Partial<Autarquia>) => {
  try {
    const response = await api.patch(`/autarquias/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar autarquia:', error);
    throw error;
  }
};
