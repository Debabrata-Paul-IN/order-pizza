import React from 'react'
import './cart.css'
import { MdDelete } from 'react-icons/md'
import CartContext from './CartContext'
import { useContext } from 'react'
import emptyCart from '../../asset/images/empty-cart.png'
import { useNavigate } from 'react-router-dom'
import items from '../product/Items'


export default function Cart() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  let total = 0;
  const getSum = (price, qnty) => {
    let sum = price * qnty;
    total += sum;
    return sum
  }

  const handleDelete = (productId)=>{
    const _cart = {...cart};
    const qnty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qnty;
    setCart(_cart);
  }

  const handleOrder = ()=>{
    window.alert('Your order has been placed successfully');
    setCart({});
  }

  if (!cart.items || cart.totalItems === 0 ) {
    const handleProduct = () => {
      navigate('/product')
    }
    return (
      <section className='container'>
        <div className='empty-cart'>
          <img src={emptyCart} alt='Empty Cart' />
        </div>
        <div className='empty-cart-wrapper'>
          <p>Your cart is empty</p>
          <button onClick={handleProduct} className='btn'>Go to product</button>
        </div>
      </section>
    )
  }

  const ItemObject = Object.keys(cart.items)

  return (
    <section className='container '>

      <div>
        <h5>Cart Items</h5>
        {
          ItemObject.map((itemId) => {
            const qnty = cart.items[itemId];

            /* Functionality for rendering cart items starts here*/
            
            const selectedItem = items.filter((item) => {
              return item.productId === itemId;
            });

            const increment = (productId) => {
              const existingQnty = qnty;
              const _cart = { ...cart };
              _cart.items[productId] = existingQnty + 1;
              _cart.totalItems += 1
              setCart(_cart);
            }

            const decrement = (productId) => {
              const existingQnty = qnty;
              if (existingQnty === 1) {
                return;
              }
              const _cart = { ...cart };
              _cart.items[productId] = existingQnty - 1;
              _cart.totalItems -= 1
              setCart(_cart);
            }
            /* Functionality for rendering cart items ends here*/


            /* Cart items rendering Starts here*/
            

            return <div className='cart-wrapper' key={itemId}>
              <div className='item-name-wrapper'>
                <img src={selectedItem[0].itemImg} alt='pizza' />
                <p className='item-name'>{selectedItem[0].name}</p>
              </div>
              <div className='qnty-wrapper'>
                <button onClick={() => { decrement(itemId) }} className='btn'> - </button>
                <p className='qnty'>{qnty}</p>
                <button onClick={() => { increment(itemId) }} className='btn'>+</button>
              </div>
              <div className='price-wrapper'>
                <span className='price'>₹ {getSum(selectedItem[0].price, qnty)}</span>
              </div>
              <div className='delete-btn-wrapper'>
                <button onClick={()=>{handleDelete(itemId)}} className='delete-btn'><MdDelete /></button>
              </div>
            </div>
          })
          /* Cart items rendering Ends here*/
        }

        <hr></hr>
        <div className='grand-total-wrapper'>
          <p className='price grand-price'>Grand Total: ₹ {total}</p>
          <button onClick={handleOrder} className='btn order-now'>Order Now</button>
        </div>
      </div>
    </section>
  )
}
