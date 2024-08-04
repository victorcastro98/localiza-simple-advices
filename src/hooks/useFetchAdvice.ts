import React from 'react';
import { getAdvice } from '../services/getAdvice';
import { IUseAdivice } from 'src/types/useAdvices.structure';

const useFetchAdvice = ({setAdvice, setLoading}: IUseAdivice) => {
    
  React.useEffect(() => {
    const fetchAdvice = async () => {
      setLoading(true)
      const adviceText = await getAdvice();
      setAdvice(adviceText);
      setLoading(false)
    };

    fetchAdvice();
  }, [setAdvice]);
};

export default useFetchAdvice;