import React from 'react'

const CartContainer = () => {
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {/* here we dynamically display items from data */}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total</h4>
                    <p>$2000</p>
                </div>
            </footer>
        </section>
    )
}

export default CartContainer
