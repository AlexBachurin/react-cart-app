import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useGlobalContext } from '../context';
const CartItem = ({ item }) => {
    const { id, title, price, img, amount } = item;
    const { clearSingleItem, increaseAmount, decreaseAmount } = useGlobalContext();
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">
                    $
                    {price}
                </h4>
                <button onClick={() => clearSingleItem(id)} className="remove-btn">remove</button>
            </div>
            <div>
                <button onClick={() => increaseAmount(id)} className="amount-btn">
                    <AiOutlineArrowUp />
                </button>
                <p className="amount">{amount}</p>
                <button onClick={() => decreaseAmount(id)} className="amount-btn">
                    <AiOutlineArrowDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem
