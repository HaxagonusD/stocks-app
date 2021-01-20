import axios from "axios";

async function getStock(stock) {
  const apiKey = "pk_3e4db4539d7546d9bff9d01c7f844257";
  const url = `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${apiKey}`;
  const data = await axios.get(url).then(({ data }) => {
    return data;
  });
  return data;
}

export default getStock;
