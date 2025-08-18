import React from 'react';
import grandfavfood1 from '../Uploads/grandfavfood1';
import grandfavfood2 from '../Uploads/grandfavfood2';
import grandfavfood3 from '../Uploads/grandfavfood3';
import grandfavfood4 from '../Uploads/grandfavfood4';

const meals = [
  { name: 'Grilled Chicken Parmesan', image: 'grandfavfood1.jpg' },
  { name: 'Jalapeño Popper Platter', image: 'grandfavfood2.jpg' },
  { name: 'Sun-Dried Tomato Chicken', image: 'grandfavfood3.jpg' },
  { name: 'Spicy Turkey Poblano Bowl', image: 'grandfavfood4.jpg' },
];

const categories = [
  'All Categories',
  'Ketogenic',
  'Low Carb',
  'Low Calorie',
  'Plant Based',
  'Trendy',
];

const favoriteMeals = () => {
  return (
    <section className="favorite-meals">
      <h2>Favorite Meals</h2>
      <div className="categories">
        {categories.map((cat, i) => (
          <button key={i} className={cat === 'Ketogenic' ? 'active' : ''}>
            {cat}
          </button>
        ))}
      </div>
      <div className="meals-list">
        {meals.map((meal, i) => (
          <div className="meal-card" key={i}>
            <img src={`images/${meal.image}`} alt={meal.name} />
            <p>{meal.name}</p>
          </div>
        ))}
      </div>
      <button className="full-menu-btn">View Grand Full Menu</button>
    </section>
  );
};

export default favoriteMeals;