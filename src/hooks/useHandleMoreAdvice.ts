import { IUseAdivice } from 'src/types/useAdvices.structure';
import { getAdvice } from '../services/getAdvice';

const useHandleMoreAdvice = ({setAdvice, setLoading}: IUseAdivice) => {
  const handleMore = async () => {
    setLoading(true)
    const adviceText = await getAdvice();
    setAdvice(adviceText);
    setLoading(false)
  };

  return handleMore;
};

export default useHandleMoreAdvice;