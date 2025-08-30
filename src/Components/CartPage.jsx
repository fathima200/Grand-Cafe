import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Header from './HomePage/header';
import Footer from './HomePage/footer';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <section className="empty-cart">
          <div className="empty-cart-content">
            <ShoppingBag size={80} className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/menu" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      
      <section className="cart-content">
        <div className="cart-header">
          <h1>Your Cart</h1>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="cart-item-meta">
                  <span>{item.calories} cal</span>
                  <span>{item.prepTime}</span>
                </div>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                <div className="cart-item-price">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₦{getCartTotal().toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee:</span>
            <span>₦500</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>₦{(getCartTotal() + 500).toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CartPage;