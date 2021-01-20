/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import { useState } from "react";
import getStock from "../services/getStock";
function Search({ setStocks, stocks }) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = async () => {
    const stock = await getStock(searchValue);

    console.log(stock);
    setSearchValue("");
    setStocks([...stocks, stock]);
  };
  return (
    <div tw="flex flex-col justify-center items-center">
      <input
        tw="text-black text-center text-xl w-1/2 rounded bg-gray-500"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search"
      ></input>
      <button tw="w-1/2 bg-gray-100 text-black" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default Search;
