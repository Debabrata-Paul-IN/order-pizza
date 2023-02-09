import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Items from './Items';
import Veg from '../../asset/images/veg-icon.png'
import nonVeg from '../../asset/images/nonVeg-icon.png'
import { TfiBackLeft } from 'react-icons/tfi'
import cartContext from '../cart/CartContext';

export default function ItemDetails() {
    const { cart, setCart } = useContext(cartContext)
    const [isAdding, setIsAdding] = useState(false)
    const params = useParams();
    const navigate = useNavigate();



    const selectedItem = Items.filter((item) => {
        return item.productId === params.id;
    })
    const handleBack = () => {
        navigate(-1);
    }

    //  console.log(selectedItem);

    const addToCart = (productId) => {
        let _cart = { ...cart };

        if (!_cart.items) {
            _cart.items = {}
        }


        if (_cart.items[productId]) {
            _cart.items[productId] += 1;

        } else {
            _cart.items[productId] = 1;
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
        <section className='container itemDetails_container'>

            <div className='itemDetails-header-wrapper'>
                <h2 className='itemDetails-header'> {selectedItem[0].name} </h2>
            </div>
            <div className='itemDetails_wrapper'>
                <div className='itemDetails_img_wrapper'>
                    <img className='itemDetails-img' src={selectedItem[0].itemImg} alt={selectedItem[0].name} />
                </div>
                <div className='itemDetails-description'>
                    <div className='itemName-wrapper'>
                        <h4>{selectedItem[0].name}</h4>
                        <img className='item-type-icon' src={selectedItem[0].type === 'veg' ? Veg : nonVeg} alt='category' />
                    </div>
                    <p className='itemDetails-pizza-size'>{selectedItem[0].size}</p>
                    <p className='price itemDetails-price'>Price : ₹ {selectedItem[0].price}</p>
                    <button onClick={() => { addToCart(selectedItem[0].productId) }} className={isAdding ? 'btn add-btn-green' : 'btn add-btn'}>{(isAdding)?'Added' : 'Add to cart'}</button>
                </div>
            </div>
            <div className='back-btn-wrapper'>
                <button onClick={handleBack} className='back-btn'><TfiBackLeft></TfiBackLeft> Back</button>
            </div>
        </section>
    )

}
