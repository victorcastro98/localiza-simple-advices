import React from "react";
import useFetchAdvice from "../hooks/useFetchAdvice";
import useHandleMoreAdvice from "../hooks/useHandleMoreAdvice";
import useSearchAdvice from "src/hooks/useSearchAdvice";

const Main: React.FC = () => {
  const [advice, setAdvice] = React.useState<string>("");
  const [searchText, setSearchText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  useFetchAdvice({setAdvice, setLoading});

  const handleMore = useHandleMoreAdvice({setAdvice, setLoading});
  const handleSearch = useSearchAdvice({setAdvice, setLoading, searchText});

  return (
    <>
    <input placeholder="Search for advice" onChange={(event)=> {setSearchText(event.target.value)}} />
    <button onClick={handleSearch}>Go</button>
      <div>
        {loading ? <div>loading...</div> : <p>{advice}</p>}
      </div>
      <button onClick={handleMore}>I need more!</button>
    </>
  );
};

export default Main;
