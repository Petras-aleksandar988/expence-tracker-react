import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobalContext();
  const inputText = useRef(null);

  console.log(amount);

  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: parseFloat(amount)
    };
    addTransaction(newTransaction);
    setText("")
    setAmount((0))
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            ref={inputText}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="ampount">
            amount <br />
            (negative - expence positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" >
          Add Transaction
        </button>
      </form>
    </>
  );
}
