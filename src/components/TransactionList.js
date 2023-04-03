import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Transaction from '../Transaction';

export default function TransactionList() {
    const { transactions } = useGlobalContext()
  
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
