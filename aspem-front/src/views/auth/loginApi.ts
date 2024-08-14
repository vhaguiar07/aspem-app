import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const loginUser = async (username: string, password: string): Promise<string> => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data.access_token;
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    throw new Error('Falha ao autenticar usuário');
  }
};
