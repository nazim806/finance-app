import React from "react";

export const TransactionHistory = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="catalog">
        <li className="negative">
          Cash <span>-$400</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </>
  );
};
