import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { DebitCredit } from "./Components/DebitCredit";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <DebitCredit />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
