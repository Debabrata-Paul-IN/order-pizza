import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import { useContext, useState } from 'react'
import cartContext from '../cart/CartContext'


export default function Productlist(props) {
    const [isAdding, setIsAdding] = useState(false)


    const { cart, setCart } = useContext(cartContext)
    const addToCart = (event, product) => {
        event.preventDefault();

        let _cart = { ...cart };

        if (!_cart.items) {
            _cart.items = {}
        }

        if (_cart.items[product.id]) {
            _cart.items[product.id] += 1;
        } else {
            _cart.items[product.id] = 1;
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;

        setCart(_cart);

        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },650)
    }

    return (
        <Link to={`/product/${props.id}`}>
            <div className='item-card'>
                <img className='item-img' src={props.itemImg} alt='pizza-name' />
                <h5 className='pizza-title'>{props.name}</h5>
                <span className='pizza-size'>{props.size}</span>
                <div className='item-price-section'>
                    <p className='price'>₹ {props.price}</p>
                    <button disabled={isAdding} onClick={(e) => { addToCart(e, props) }} className={isAdding ? 'btn add-btn-green' : 'btn add-btn'}>ADD{isAdding ? 'ED' : ''}</button>
                </div>
            </div>
        </Link>
    )
}
