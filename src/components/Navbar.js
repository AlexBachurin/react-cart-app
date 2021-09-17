import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Navbar = () => {
    const { amount } = useGlobalContext();
    return (
        <nav>
            <div className="nav-center">
                <h3>use reducer</h3>
                <div className="nav-container">
                    <FaShoppingCart className="cart-icon" />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
