import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="catalog">
        {transactions.map((transaction) => (
          <li className="negative">
            {transaction.text} <span>-$400</span>
            <button className="delete-btn">X</button>
          </li>
        ))}
      </ul>
    </>
  );
};
