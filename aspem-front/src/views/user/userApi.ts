import axios from 'axios';
import { User } from './types';

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

export const fetchUsers = async (url: string, token: string): Promise<{ users: User[], total: number }> => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      users: response.data.users || [],
      total: response.data.total || 0,
    };
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

export const searchUsers = async (
  query: string,
  token: string,
  page: number = 1,
  limit: number = 10
): Promise<{ users: User[], total: number }> => {
  try {
    const params = { username: query, page, limit };

    const response = await axios.get('/users/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });

    return {
      users: response.data.users || [],
      total: response.data.total || 0,
    };
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

export const fetchUserById = async (id: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o usuário com ID ${id}:`, error);
    throw error;
  }
};

export const updateUser = async (id: string, updateData: Partial<User>): Promise<User> => {
  try {
    const response = await api.patch(`/users/${id}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
};
