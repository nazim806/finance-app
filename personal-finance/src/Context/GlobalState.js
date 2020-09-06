import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//initial state

const initialState = {
  transaction: [
    { id: 1, text: "Books", amount: -56 },
    { id: 2, text: "Theatre", amount: -30 },
    { id: 3, text: "dividend", amount: 1500 },
    { id: 4, text: "Cell phone", amount: -450 },
  ],
};

//Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
