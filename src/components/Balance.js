import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
export default function Balance() {
  const { transactions } = useGlobalContext();

  const amounts = transactions
    .map((transaction) => transaction.amount)
    .reduce((prev, curr) => (prev += curr), 0).toFixed(2)
  

  return (
    <>
      <h4>Your balance</h4>
          <h1>${amounts }</h1>
    </>
  );
}
