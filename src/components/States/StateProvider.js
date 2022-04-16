import React, { createContext, CreateContext, useContext, useReducer } from "react";

//prepare the data layer
export const StateContext = createContext();

//this will wrap the app and make accecable the data for every part in the app and manuplate the data 
export const StateProvider = ({
    reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

//this will pull information that store in the data layer 
export const useStateValue = () => useContext(StateContext);