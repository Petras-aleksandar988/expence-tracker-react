import React from "react";

import { useGlobalContext } from "./context/GlobalContext";

export default function Transaction({ transaction }) {
const {deleteTransaction} = useGlobalContext()

  const plusMinus = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {plusMinus}${Math.abs(transaction.amount).toFixed(2)}
      </span>
      <button
        className="delete-btn"
       onClick={()=> deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
}
