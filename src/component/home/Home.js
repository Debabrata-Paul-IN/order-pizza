import React from 'react'
import { Link } from 'react-router-dom'
import HeaderImage from '../../asset/images/pizza-header-image.png'
import './home.css'

export default function Home() {
  return (
    <section className='container header-container'>
      <div className='header-left-section'>
        <h6>Are you hungry ?</h6>
        <h1>Don't Wait !</h1>
        <Link className='btn order-btn' to='product'>Order Now</Link>
      </div>
      <div className='header-right-section'>
        <img src={HeaderImage} alt="Pizza-Pic"/>
      </div>
    </section>
  )
}
