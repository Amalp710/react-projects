import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { RiSwap2Fill } from "react-icons/ri";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setResult(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(result);
    setResult(amount);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D')`,
    }}
    >
      <div className="max-w-lg w-full bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={options}
              selectCurrency={from}
              onAmountChange={(value) => setAmount(value)}
            />
          </div>
          <div className="flex justify-center mb-4">
            <button
              type="button"
              className="flex justify-between items-center gap-2 px-4 py-2 bg-red-700 rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={swap}
            >
              <RiSwap2Fill /> Swap
            </button>
          </div>
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={result}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={options}
              selectCurrency={to}
              amountDisabled
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-green-500 rounded-lg text-white font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;