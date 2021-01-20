/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
function Stock({ companyName, symbol, latestPrice, changePercent }) {
  const redOrGreenPercentage = Math.sign(changePercent) === 1 ? "green" : "red";
  console.log(Math.sign(changePercent));
  return (
    <div tw="flex justify-between p-4 border-gray-500 border-solid border-2 m-2">
      <div tw="flex flex-col ">
        <h1 tw="text-4xl font-bold">{symbol}</h1>
        <p tw="text-sm">{companyName}</p>
      </div>
      <div tw="flex flex-col items-center justify-center">
        <h1>${latestPrice}</h1>
        <h3
          style={{ backgroundColor: redOrGreenPercentage }}
          tw={"rounded p-1"}
        >
          {changePercent}%
        </h3>
      </div>
    </div>
  );
}

export default Stock;
