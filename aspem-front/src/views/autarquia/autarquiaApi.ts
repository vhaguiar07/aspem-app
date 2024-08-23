import axios from 'axios';
import { Autarquia } from './types';

export const fetchAutarquias = async (url: string): Promise<Autarquia[]> => {
  const response = await axios.get(url);
  return response.data;
};

export const createAutarquia = async (autarquia: Autarquia) => {
  const response = await axios.post('/autarquias/add', autarquia);
  return response.data;
};

export const getAutarquiaById = async (id: string): Promise<Autarquia> => {
  const response = await axios.get(`/autarquias/${id}`);
  return response.data;
};

export const updateAutarquia = async (id: string, updatedData: Partial<Autarquia>) => {
  const response = await axios.patch(`/autarquias/${id}`, updatedData);
  return response.data;
};
