import { useId } from "react";
import './inputBox.css'

export function InputBox({
    label, amount, onAmountChange,
    onCurrencyChange, currencyOptions, selectCurrency,
    amountDisable, currencyDisable
}) {
    const amountInputId = useId();
    return (
        <div className="inputbox">
            <span className="labelinputcontainer">
                <label htmlFor={amountInputId}>{label}</label>
                <input type="number" className="boxinput" id={amountInputId} placeholder="Amount" disabled={amountDisable} value={amount} onChange={e => {
                    if (onAmountChange) {
                        onAmountChange(e.target.value);
                    }
                }}
                />
            </span>
            <span className="labelinputcontainer">
                <label htmlFor='selectinput'>Currency</label>
                <select value={selectCurrency} onChange={e => {
                    if (onCurrencyChange) {
                        onCurrencyChange(e.target.value);
                    }
                }} disabled={currencyDisable} className="boxinput" id="selectinput">
                    {currencyOptions.map(currency =>
                        <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                    )}
                </select>
            </span>
        </div>
    );
}