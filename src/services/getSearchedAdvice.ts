import axios from 'axios';
import API_BASE_URL from './api';

export const getSearchedAdvice = async (query: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/${query}`);
  return response.data.slips;
  } catch (error) {
    return 'Error'
  }
};