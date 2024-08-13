import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const loginUser = async (username: string, password: string): Promise<string> => {
  const response = await api.post('/auth/login', { username, password });
  return response.data.token;
};
