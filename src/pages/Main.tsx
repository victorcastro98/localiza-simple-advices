import React from "react";
import useFetchAdvice from "../hooks/useFetchAdvice";
import useHandleMoreAdvice from "../hooks/useHandleMoreAdvice";
import useSearchAdvice from "src/hooks/useSearchAdvice";
import Button from "src/components/Button";

const Main: React.FC = () => {
  const [advice, setAdvice] = React.useState<string>("");
  const [searchText, setSearchText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  useFetchAdvice({ setAdvice, setLoading });

  const handleMore = useHandleMoreAdvice({ setAdvice, setLoading });
  const handleSearch = useSearchAdvice({ setAdvice, setLoading, searchText });

  return (
    <div className="w-full flex flex-col items-center justify-evenly gap-9 py-6">
      <div className="text-3xl md:text-6xl text-white text-center">
        {loading ? <div>loading...</div> : <p>{advice ?? "No advices found, serach another topic"}</p>}
      </div>

      <div className="w-full flex flex-row gap-2 justify-center">
        <input
          className="w-3/4 rounded-lg p-2"
          placeholder="Search for advice"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <Button action={handleSearch} text="Go" />
      </div>

      <Button action={handleMore} text="Get random advice!" />
    </div>
  );
};

export default Main;
