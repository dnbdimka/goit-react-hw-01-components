import React from "react";
import data from "../../data";
import TransactionHistoryList from "./transactionHistoryList/TransactionHistoryList";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  return (
    <div className={styles.transactionHistoryContainer}>
      <table className={styles.transactionHistory}>
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
    </div>
  );
};

export default TransactionHistory;
