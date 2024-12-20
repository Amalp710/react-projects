import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div
            className={`bg-green-200 p-4 rounded-xl shadow-lg flex gap-4 items-center ${className}`}
        >
            <div className="flex-1">
                <label
                    htmlFor={amountInputId}
                    className="text-gray-500 text-sm font-medium mb-1 block"
                >
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full p-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 text-base"
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>
            <div className="flex-1">
                <label
                    className="text-gray-500 text-sm font-medium mb-1 block"
                >
                    Currency Type
                </label>
                <select
                    className="w-full p-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-gray-800 text-base cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currencyOption) => (
                        <option key={currencyOption} value={currencyOption}>
                            {currencyOption}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

