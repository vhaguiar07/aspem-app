import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const loginUser = async (username: string, password: string): Promise<string> => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data.access_token;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.message || 'Erro desconhecido ao realizar login';
      throw new Error(errorMessage);
    } else {
      throw new Error('Erro ao realizar login.');
    }
  }
};
