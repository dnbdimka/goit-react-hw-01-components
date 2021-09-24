import React from "react";
import data from "../../data";
import TransactionHistoryList from "./transactionHistoryList/TransactionHistoryList";

const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.transactions.map((transaction) => (
          <TransactionHistoryList
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
