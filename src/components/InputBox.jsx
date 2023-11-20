import { useId } from "react";

export function InputBox({
    label, amount, onAmountChange,
    onCurrencyChange, currencyOptions, selectCurrency,
    amountDisable, currencyDisable
}) {
    const amountInputId = useId();
    return (
        <div>
            <label htmlFor={amountInputId}>{label}</label>
            <input id={amountInputId} type="number" placeholder="Amount"
                disabled={amountDisable} value={amount} onChange={e => {
                    if (onAmountChange) {
                        onAmountChange(e.target.value);
                    }
                }}
            />
            <div>
                <p>Currency Type</p>
                <select value={selectCurrency} onChange={e => {
                    if (onCurrencyChange) {
                        onCurrencyChange(e.target.value);
                    }
                }} disabled={currencyDisable}>
                    {currencyOptions.map(currency =>
                        <option key={currency} value={currency}>{currency}</option>
                    )}
                </select>
            </div>
        </div>
    );
}