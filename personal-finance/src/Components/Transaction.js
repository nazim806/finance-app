import React from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className="negative">
      {transaction.text}{" "}
      <span>
        {sign}${transaction.amount}
      </span>
      <button className="delete-btn">X</button>
    </li>
  );
};
