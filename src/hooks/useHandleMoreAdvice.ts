import { IUseAdivice } from 'src/types/useAdvices.structure';
import { loadAdvice } from '../services/adviceService';

const useHandleMoreAdvice = ({setAdvice, setLoading}: IUseAdivice) => {
  const handleMore = async () => {
    setLoading(true)
    const adviceText = await loadAdvice();
    setAdvice(adviceText);
    setLoading(false)
  };

  return handleMore;
};

export default useHandleMoreAdvice;