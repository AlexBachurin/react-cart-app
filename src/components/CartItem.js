import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
const CartItem = ({ item }) => {
    const { id, title, price, img, amount } = item;
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">
                    $
                    {price}
                </h4>
                <button className="remove-btn">remove</button>
            </div>
            <div>
                <button className="amount-btn">
                    <AiOutlineArrowUp />
                </button>
                <p className="amount">1</p>
                <button className="amount-btn">
                    <AiOutlineArrowDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem
