import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Header from './HomePage/header';
import Footer from './HomePage/footer';

const menuItems = [
  {
    id: 1,
    name: 'Grilled Chicken Parmesan',
    description: 'Tender grilled chicken breast topped with melted parmesan cheese, served with marinara sauce and fresh herbs. A classic comfort dish that never disappoints.',
    price: 2500,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Chicken breast', 'Parmesan cheese', 'Marinara sauce', 'Fresh basil', 'Garlic'],
    calories: 450,
    prepTime: '25 mins'
  },
  {
    id: 2,
    name: 'Jalapeño Popper Platter',
    description: 'Crispy jalapeño peppers stuffed with cream cheese and wrapped in bacon. Served with ranch dipping sauce for the perfect spicy kick.',
    price: 1800,
    category: 'Appetizer',
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Jalapeño peppers', 'Cream cheese', 'Bacon', 'Ranch sauce'],
    calories: 320,
    prepTime: '15 mins'
  },
  {
    id: 3,
    name: 'Sun-Dried Tomato Chicken',
    description: 'Succulent chicken breast marinated in herbs and topped with sun-dried tomatoes, mozzarella, and fresh spinach. A Mediterranean-inspired delight.',
    price: 2800,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Chicken breast', 'Sun-dried tomatoes', 'Mozzarella', 'Spinach', 'Herbs'],
    calories: 520,
    prepTime: '30 mins'
  },
  {
    id: 4,
    name: 'Spicy Turkey Poblano Bowl',
    description: 'Seasoned ground turkey with roasted poblano peppers, black beans, corn, and cilantro lime rice. Topped with avocado and sour cream.',
    price: 2200,
    category: 'Bowl',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Ground turkey', 'Poblano peppers', 'Black beans', 'Corn', 'Cilantro rice'],
    calories: 480,
    prepTime: '20 mins'
  },
  {
    id: 5,
    name: 'Beef Steak Supreme',
    description: 'Premium ribeye steak grilled to perfection, served with garlic mashed potatoes and seasonal vegetables. A true carnivore\'s dream.',
    price: 4500,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-chop-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Ribeye steak', 'Garlic mashed potatoes', 'Seasonal vegetables', 'Herb butter'],
    calories: 680,
    prepTime: '35 mins'
  },
  {
    id: 6,
    name: 'Caesar Salad Deluxe',
    description: 'Fresh romaine lettuce tossed in our signature Caesar dressing, topped with parmesan cheese, croutons, and grilled chicken.',
    price: 1500,
    category: 'Salad',
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Parmesan', 'Croutons', 'Grilled chicken'],
    calories: 380,
    prepTime: '10 mins'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a molten chocolate center, served warm with vanilla ice cream and fresh berries.',
    price: 1200,
    category: 'Dessert',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Vanilla ice cream', 'Fresh berries'],
    calories: 420,
    prepTime: '15 mins'
  },
  {
    id: 8,
    name: 'Seafood Pasta',
    description: 'Fresh linguine pasta tossed with shrimp, scallops, and mussels in a creamy white wine sauce with garlic and herbs.',
    price: 3200,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: ['Linguine pasta', 'Shrimp', 'Scallops', 'Mussels', 'White wine sauce'],
    calories: 580,
    prepTime: '25 mins'
  }
];

const categories = ['All', 'Main Course', 'Appetizer', 'Salad', 'Bowl', 'Dessert'];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useCart();

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-page">
      <Header />
      
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Delicious Menu</h1>
          <p>Discover our carefully crafted dishes made with the finest ingredients</p>
        </div>
      </section>

      <section className="menu-content">
        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item-card">
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-item-overlay">
                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedItem(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">₦{item.price.toLocaleString()}</span>
                </div>
                <p className="description">{item.description}</p>
                <div className="menu-item-meta">
                  <span className="calories">{item.calories} cal</span>
                  <span className="prep-time">{item.prepTime}</span>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>×</button>
            <div className="modal-body">
              <img src={selectedItem.image} alt={selectedItem.name} />
              <div className="modal-info">
                <h2>{selectedItem.name}</h2>
                <p className="modal-description">{selectedItem.description}</p>
                <div className="modal-meta">
                  <span className="modal-price">₦{selectedItem.price.toLocaleString()}</span>
                  <span className="modal-calories">{selectedItem.calories} calories</span>
                  <span className="modal-time">{selectedItem.prepTime}</span>
                </div>
                <div className="ingredients">
                  <h4>Ingredients:</h4>
                  <ul>
                    {selectedItem.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="modal-add-to-cart"
                  onClick={() => {
                    handleAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                >
                  Add to Cart - ₦{selectedItem.price.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MenuPage;