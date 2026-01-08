
import { HomePage } from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrderPage } from './pages/Orders/OrderPage'
import { TrackingPage } from './pages/Tracking/TrackingPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import './App.css'


function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items')
      .then(response => {
        setCart(response.data);
      });
  }, []);


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  )
}

export default App
