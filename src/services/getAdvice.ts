import axios from 'axios';
import API_BASE_URL from './api';

export const getAdvice = async (): Promise<string> => {
  const response = await axios.get(API_BASE_URL);
  return response.data.slip.advice;
};