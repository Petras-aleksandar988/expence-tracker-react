import React, { useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};

// create context
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

    
    // actions
    function deleteTransaction (id) {
        dispatch({
            type: "DELETE_TRANSACTION",
        payload : id})
    }
    function addTransaction (transaction) {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: transaction,
        });
    }


  return (
      <AppContext.Provider value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
      }}>
      {children}
    </AppContext.Provider>
  );
}
// custom hook

  function useGlobalContext() {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useGlobalContext };
