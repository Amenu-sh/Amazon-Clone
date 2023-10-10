import React, { createContext, useContext, useReducer } from "react";
//prepares the dataLayer
export const stateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, intialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </stateContext.Provider>
);
//push and pull information from the data layer
export const useStateValue = () => useContext(stateContext);
