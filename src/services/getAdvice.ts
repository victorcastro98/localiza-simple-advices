import axios from 'axios';
import API_BASE_URL from './api';

export const getAdvice = async (): Promise<string> => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.slip.advice;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro de rede:', error.message);
    return 'Erro de rede'
    } 
      console.error('Erro desconhecido:', error.message);
    return 'Error desconhecido'
  }
};
