
import { HomePage } from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrderPage } from './pages/Orders/OrderPage'
import { TrackingPage } from './pages/Tracking/TrackingPage' 
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import './App.css'


function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  )
}

export default App
