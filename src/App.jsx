import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import HomePage from './Components/HomePage'
import MenuPage from './Components/MenuPage'
import CartPage from './Components/CartPage'
import CheckoutPage from './Components/CheckoutPage'
import './index.css'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App