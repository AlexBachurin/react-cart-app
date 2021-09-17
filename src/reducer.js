const reducer = (state, action) => {

    switch (action.type) {
        case 'CLEAR_CART':
            return { ...state, cart: [] }
        case 'CLEAR_SINGLE_ITEM':
            const id = action.payload;
            const clearedArr = state.cart.filter(item => item.id !== id);
            return { ...state, cart: clearedArr }
        case 'INCREASE':
            let itemId = action.payload;
            let tempArr = state.cart.map(item => {
                if (item.id === itemId) {
                    return { ...item, amount: item.amount + 1 }
                }
                return item;
            })
            return { ...state, cart: tempArr }
        case 'DECREASE':
            const tempID = action.payload;
            let tempArr2 = state.cart.map(item => {
                if (item.id === tempID) {
                    return { ...item, amount: item.amount - 1 }
                }
                return item;
            })
                //filter to show elements which dont have amount of 0
                .filter(item => {
                    return item.amount !== 0;
                })
            return { ...state, cart: tempArr2 }
        case 'TOTALS':
            //functionality to get total and amount
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem
                    const itemTotal = price * amount

                    cartTotal.total += itemTotal
                    cartTotal.amount += amount
                    return cartTotal
                },
                {
                    total: 0,
                    amount: 0,
                }
            )
            total = parseFloat(total.toFixed(2))

            return { ...state, total, amount }
        default:
            throw new Error('No such action type');

    }
}

export default reducer;