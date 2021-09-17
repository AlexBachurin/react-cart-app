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

    const clearSingleItem = (id) => {
        dispatch({ type: 'CLEAR_SINGLE_ITEM', payload: id })
    }
    return <AppContext.Provider value={
        {
            ...state,
            clearCart,
            clearSingleItem
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