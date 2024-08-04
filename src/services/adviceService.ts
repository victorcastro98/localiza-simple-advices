import axios from 'axios';

export const loadAdvice = async (): Promise<string> => {
  const response = await axios.get("https://api.adviceslip.com/advice");
  return response.data.slip.advice;
};