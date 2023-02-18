import './App.css';
import Home from './component/home/Home'
import Nav from './component/nav/Nav'
import Cart from './component/cart/Cart'
import Product from './component/product/Product'
import Error404 from './component/404/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetails from './component/product/ItemDetails';
import cartContext from './component/cart/CartContext';
import { useEffect, useState } from 'react';

function App() {

  const [cart, setCart] = useState(
    window.localStorage.getItem('cart') === null ? {} : (JSON.parse(window.localStorage.getItem('cart')))
  );

  /*useEffect(() => {
    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));

  }, [])*/

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <BrowserRouter>
      <cartContext.Provider value={{ cart, setCart }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' exact element={<Product />} />
          <Route path='product/:id' element={<ItemDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </cartContext.Provider>

    </BrowserRouter>
  );
}

export default App;
