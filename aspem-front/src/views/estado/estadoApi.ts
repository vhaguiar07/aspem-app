import axios from 'axios';
import { Estado, FetchEstadosResponse } from './types';

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

export const fetchEstados = async (url: string): Promise<FetchEstadosResponse> => {
  try {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios.get(url, { headers });
    console.log('Resposta da API:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar estados:', error.message);
      console.error('Detalhes do erro:', error.response?.data || error.response?.status);
    } else {
      console.error('Erro desconhecido:', error);
    }
    throw error;
  }
};

export const createEstado = async (estado: Estado) => {
  try {
    const response = await api.post('/estados/add', estado);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar estado:', error);
    throw error;
  }
};

export const getEstadoById = async (id: string): Promise<Estado> => {
  try {
    const response = await api.get(`/estados/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar estado por ID:', error);
    throw error;
  }
};

export const updateEstado = async (id: string, updatedData: Partial<Estado>) => {
  try {
    const response = await api.patch(`/estados/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar estado:', error);
    throw error;
  }
};
