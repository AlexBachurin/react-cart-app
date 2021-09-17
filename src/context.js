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

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }
    return <AppContext.Provider value={
        {
            ...state,
            clearCart
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