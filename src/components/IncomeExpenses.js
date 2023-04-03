import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
export default function IncomeExpenses() {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((income) => income > 0)
    .reduce((prev, curr) => {
      return (prev += curr);
    }, 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((expense) => expense < 0)
      .reduce((prev, curr) => {
        return (prev += curr);
      }, 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}
