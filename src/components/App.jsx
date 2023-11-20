import { useState } from 'react';
import { InputBox } from './InputBox.jsx'
import { useCurrencyInfo } from '../hooks/useCurrencyInfo.js'
import './app.css'

export default function App() {
    const [amount, setAmount] = useState(0),
        [from, setFrom] = useState('inr'),
        [to, setTo] = useState('usd'),
        [convertedAmount, setConvertedAmount] = useState(0),
        currencyInfo = useCurrencyInfo(from),
        options = Object.keys(currencyInfo);

    const swap = () => {
        const obj = { from: to, to: from, amount: convertedAmount, convertedAmount: amount };
        setFrom(obj.from);
        setTo(obj.to);
        setAmount(obj.amount);
        setConvertedAmount(obj.convertedAmount);
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }
    return (
        <form onSubmit={e => {
            e.preventDefault();
            convert();
        }}>
            <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={setFrom}
                selectCurrency={from}
                onAmountChange={setAmount}
            />
            <button type="button" onClick={swap}>swap</button>
            <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={setTo}
                selectCurrency={to}
                amountDisable
            />
            <button type="submit">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
    );
}