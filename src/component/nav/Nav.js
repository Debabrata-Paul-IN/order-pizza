import React from 'react'
import './nav.css'
import { BsCart4 } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../asset/logo.png'
import cartContext from '../cart/CartContext'
import { useContext } from 'react'



export default function Nav() {
    const {cart} = useContext(cartContext);
    
    return (
        <section className='container'>
            <div className='nav-menu-bar'>
                <div>
                    <Link to='/'>
                        <img className='logo' src={logo} alt='logo' />
                    </Link>
                </div>
                <div>
                    <ul className='nav_menu_wrapper'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='product'>Product</NavLink></li>
                        <li>
                            <Link to='cart' className='cart-icon-wrapper'>
                            {cart ? <span>{cart.totalItems ? cart.totalItems : 0}</span> : <span>0</span> }
                                <BsCart4 className='cart-icon' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
