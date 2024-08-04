import { getSearchedAdvice } from '../services/getSearchedAdvice';
import { IUseSearchAdivice } from 'src/types/useAdvices.structure';


const useSearchAdvice = ({setAdvice, setLoading, searchText}: IUseSearchAdivice) => {
    const fetchSearch = async () => {
        setLoading(true)
        const searchedAdviceText = await getSearchedAdvice(searchText);
        console.log("searchedAdviceText: ", searchedAdviceText)
        if(searchedAdviceText === undefined) {
          setLoading(false)
          return setAdvice("Error finding advice, please search another term!");
        }
        const randomIndex = Math.floor(Math.random() * searchedAdviceText.length);
        setAdvice(searchedAdviceText[randomIndex].advice);
        setLoading(false)
      };
  
    return fetchSearch;
  };
export default useSearchAdvice;