import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { DebitCredit } from "./Components/DebitCredit";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <DebitCredit />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
