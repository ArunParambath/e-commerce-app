
import { HomePage } from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrderPage } from './pages/Orders/OrderPage'
import { TrackingPage } from './pages/Tracking/TrackingPage' 
import './App.css'


function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>

  )
}

export default App
