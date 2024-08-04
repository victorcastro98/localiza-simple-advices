import React from 'react';
import { loadAdvice } from '../services/adviceService';
import { IUseAdivice } from 'src/types/useAdvices.structure';

const useFetchAdvice = ({setAdvice, setLoading}: IUseAdivice) => {
    
  React.useEffect(() => {
    const fetchAdvice = async () => {
      const adviceText = await loadAdvice();
      setAdvice(adviceText);
      setLoading(false)
    };

    fetchAdvice();
  }, [setAdvice]);
};

export default useFetchAdvice;