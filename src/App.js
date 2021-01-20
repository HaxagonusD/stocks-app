import "./App.css";
import { useEffect, useState } from "react";
import Stock from "./components/Stock";
import Search from "./components/Search";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

function App() {
  const [stocks, setStocks] = useState([]);
  console.log(stocks);
  return (
    <div
      tw=" flex flex-col justify-center h-full bg-black text-white"
      className="App"
    >
      <h1 tw="text-6xl font-bold">Stocks</h1>

      {stocks.map((currentStock, index) => {
        return <Stock {...currentStock} key={index} />;
      })}

      <Search stocks={stocks} setStocks={setStocks} />
    </div>
  );
}

export default App;
