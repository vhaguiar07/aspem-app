import axios from 'axios';
import { Autarquia } from './types';

export const fetchAutarquias = async (url: string): Promise<Autarquia[]> => {
  const response = await axios.get(url);
  return response.data;
};
