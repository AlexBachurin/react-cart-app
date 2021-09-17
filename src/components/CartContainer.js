import React from 'react'
import { useGlobalContext } from '../context'
import CartItem from './CartItem';
const CartContainer = () => {
    const { cart } = useGlobalContext();
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {/* here we dynamically display items from data */}
                {cart.map((item, index) => {
                    return <CartItem key={index} item={item} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total</h4>
                    <p>$2000</p>
                </div>
                <button className="btn clear-btn">clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
