import React, { useContext, useReducer } from "react";
import data from './data';
import reducer from './reducer'
const AppContext = React.createContext();

const initialState = {
    cart: data,

}

const AppProvider = ({ children }) => {
    //reducer
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={
        {
            ...state
        }
    }>
        {children}
    </AppContext.Provider>
}


//custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }