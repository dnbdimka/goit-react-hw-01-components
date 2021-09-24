import React from "react";
import PropTypes from "prop-types";

const TransactionHistoryList = ({ transaction }) => {
  const { type, amount, currency } = transaction;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryList.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistoryList;
