import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li className="negative">
      {transaction.text} <span>-$400</span>
      <button className="delete-btn">X</button>
    </li>
  );
};
