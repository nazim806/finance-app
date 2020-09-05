import React from "react";

export const TransactionHistory = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="catalog" class="catalog">
        <li class="negative">
          Cash <span>-$400</span>
          <button class="delete-btn">X</button>
        </li>
      </ul>
    </>
  );
};
