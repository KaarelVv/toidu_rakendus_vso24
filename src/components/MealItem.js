import React from 'react';
import Button from './UI/Button';
import { useCart } from '../store/CartContext';


const MealItem = (props) => {
  const { addToCart } = useCart();  // Get addToCart function from context

  const number = props.meal.price;
  const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number
  );

  const handleAddToCart = () => {
    addToCart(props.meal);  // Pass the meal to addToCart
    console.log(`Added ${props.meal.name} to the cart`);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
        <div>
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p>{props.meal.description}</p>
        </div>
        <p>
          <Button variant="button" onClick={handleAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
