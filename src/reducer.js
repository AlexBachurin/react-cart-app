const reducer = (state, action) => {

    switch (action.type) {
        case 'CLEAR_CART':
            return { ...state, cart: [] }
        case 'CLEAR_SINGLE_ITEM':
            const id = action.payload;
            const clearedArr = state.cart.filter(item => item.id !== id);
            return { ...state, cart: clearedArr }
        default:
            throw new Error('No such action type');

    }
}

export default reducer;