import React from 'react';
import './App.css'

function App() {
  const [bitcoinPrice, setBitcoinPrice] = React.useState();
  console.log(new Date().getMilliseconds(), "Start");

  async function loadData() {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

    const responseJson = await response.json();
    
    setBitcoinPrice(responseJson.bpi.USD.rate);
    console.log(new Date().getMilliseconds(), "Finish");
  }

  React.useEffect(function() { loadData(); });

  console.log(React);

  return (
    <>
      <h1>Bitcoin Price</h1>
      <button onClick={loadData}>🤑</button>
      <h2>$ {bitcoinPrice} USD</h2>
    </>
  )
}

export default App
