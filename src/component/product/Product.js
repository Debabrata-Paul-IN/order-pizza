import React from 'react'
import './product.css'
import Productlist from './Productlist'
import Items from './Items'


export default function Product() {

  return (
    <section className='container '>

      <h2 className='product-heading'>Products</h2>
      <div className='item-wrapper'>
      {
        Items.map(
          (item)=>{
            return <Productlist
            key={item.productId}
            id={item.productId}
            name={item.name}
            itemImg={item.itemImg}
            size={item.size}
            price={item.price}
            type={item.type}
            />
          }
        )
      }
        
    
      </div>
    </section>
  )
}
