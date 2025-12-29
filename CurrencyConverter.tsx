import { useRef, useState, useEffect } from "react";
import "./CurrentCurrency.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange } from "@fortawesome/free-solid-svg-icons";

const CurrencyConverter = () => {
  const [money, useMoney] = useState("");
  const [result, useResult] = useState("");

  const values = {
    INR: 1, // Indian Rupee (base)
    USD: 89.8, // US Dollar
    JPY: 0.57, // Japanese Yen
    EUR: 97.2, // Euro
    GBP: 113.5, // British Pound
    AUD: 59.8, // Australian Dollar
    CAD: 66.3, // Canadian Dollar
    CNY: 12.4, // Chinese Yuan
    AED: 24.4, // UAE Dirham
    KRW: 0.067, // South Korean Won
  };

  const ref1 = useRef("");
  const ref2 = useRef("");
  const ref3 = useRef("");
  const ref4 = useRef("");

  function MoneyHandler(e) {
    useMoney(e.target.value);
  }
  function Converter_to(e) {}
  function Converter_from(e) {}
  function convert(e) {
    const value1 = ref1.current.value;
    const value2 = ref2.current.value;
    ref2.current.value = value1;
    ref1.current.value = value2;
  }
  function GetData() {
    if (money.length == 0) {
      alert("Enter the amount ");
      return;
    }
    const c1 = Number(ref1.current.value);
    const c2 = Number(ref2.current.value);
    const final = (money * c1) / c2;
    useResult(final);
    ref3.current.focus();
  }
  useEffect(() => {
    ref4.current.focus();
  }, []);

  function Handling_Result() {}
  return (
    <>
      <div className="Main_Currency">
        <div className="main2">
          <h1>Currency Converter</h1>
          <div className="inside_main">
            <label>Enter Amount</label>
            <br />
            <input
              type="number"
              placeholder="Enter the amount"
              ref={ref4}
              value={money}
              onChange={MoneyHandler}
            />
            <br />
            <div className="Converter">
              <h3>From</h3>
              <select ref={ref1} onChange={Converter_from} className="select">
                <option value={values.INR}>Inr</option>
                <option value={values.JPY}>Jpy</option>
                <option value={values.USD}>Usd</option>
                <option value={values.AED}>Aed</option>
                <option value={values.AUD}>Aud</option>
                <option value={values.CAD}>Cad</option>
                <option value={values.CNY}>Cny</option>
                <option value={values.EUR}>Eur</option>
                <option value={values.GBP}>Gbp</option>
                <option value={values.KRW}>krw</option>
              </select>

              <button onClick={convert}>
                <FontAwesomeIcon icon={faExchange} />
              </button>
              <h3>to</h3>
              <select ref={ref2} onChange={Converter_to} className="select">
                <option value={values.JPY}>Jpy</option>
                <option value={values.INR}>Inr</option>
                <option value={values.USD}>Usd</option>
                <option value={values.AED}>Aed</option>
                <option value={values.AUD}>Aud</option>
                <option value={values.CAD}>Cad</option>
                <option value={values.CNY}>Cny</option>
                <option value={values.EUR}>Eur</option>
                <option value={values.GBP}>Gbp</option>
                <option value={values.KRW}>krw</option>
              </select>
              <br />
            </div>
            <div className="btn-exchange">
              <button onClick={GetData}>Get Exchange Rate</button>
              <input
                type="text"
                ref={ref3}
                value={result}
                className="text"
                onChange={Handling_Result}
                readOnly
              />{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter;
