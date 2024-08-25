import axios from 'axios';
import { Autarquia } from './types';

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

export const fetchAutarquias = async (url: string): Promise<Autarquia[]> => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar autarquias:', error);
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
