import React, { useContext, useReducer, useEffect } from "react";
import data from './data';
import reducer from './reducer'
const AppContext = React.createContext();

const initialState = {
    cart: data,
    amount: 0,
    total: 0
}

const AppProvider = ({ children }) => {
    //reducer
    const [state, dispatch] = useReducer(reducer, initialState)
    //clear ALL cart
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }
    //remove 1 item
    const clearSingleItem = (id) => {
        dispatch({ type: 'CLEAR_SINGLE_ITEM', payload: id })
    }
    //increase amount
    const increaseAmount = (id) => {
        dispatch({ type: 'INCREASE', payload: id });
    }
    //decrease amount
    const decreaseAmount = (id) => {
        dispatch({ type: 'DECREASE', payload: id });
    }

    //use effect to calculate totals on every cart state change
    useEffect(() => {
        dispatch({ type: 'TOTALS' })

    }, [state.cart])



    return <AppContext.Provider value={
        {
            ...state,
            clearCart,
            clearSingleItem,
            increaseAmount,
            decreaseAmount
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