import "./App.css";
import { useEffect, useState } from "react";
import Stock from "./components/Stock";
import Search from "./components/Search";
import getStock from "./services/getStock";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

function App() {
  const [stocks, setStocks] = useState([]);
  console.log(stocks);
  useEffect(() => {
    (async () => {
      const fb = await getStock("fb");
      const snap = await getStock("snap");
      const shop = await getStock("shop");
      const f = await getStock("f");
      const aapl = await getStock("aapl");
      setStocks([fb, f, snap, shop, aapl]);
    })();
  }, []);
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
