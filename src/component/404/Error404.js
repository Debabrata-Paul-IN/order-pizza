import React from 'react'
import search from '../../asset/images/search.png'
import './error404.css'

export default function Error404() {
  return (
    <div className='container'>
        <div className='errContainer'>
            <img className='errImg'src={search} alt='Error'/>
            <p> The page you are looking for does not exist</p>
        </div>
    </div>
  )
}
