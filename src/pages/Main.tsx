import React from "react";
import useFetchAdvice from "../hooks/useFetchAdvice";
import useHandleMoreAdvice from "../hooks/useHandleMoreAdvice";

const Main: React.FC = () => {
  const [advice, setAdvice] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  useFetchAdvice({setAdvice, setLoading});

  const handleMore = useHandleMoreAdvice({setAdvice, setLoading});

  return (
    <>
      <div>
        {loading ? <div>loading...</div> : <p>{advice}</p>}
      </div>
      <button onClick={handleMore}>I need more!</button>
    </>
  );
};

export default Main;
