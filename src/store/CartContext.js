import React, { createContext, useState, useContext } from 'react';

// 1. Create the CartContext using createContext()
const CartContext = createContext();

// 2. Custom hook to use CartContext
export const useCart = () => {
  return useContext(CartContext); // This will allow components to access the cart state
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Keeps track of cart items with quantities

  // Function to add items to the cart
  const addToCart = (meal) => {
    setCartItems((prevItems) => {
      const existingMeal = prevItems.find(item => item.id === meal.id);
      if (existingMeal) {
        return prevItems.map(item => 
          item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...meal, quantity: 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (mealId) => {
    setCartItems((prevItems) => 
      prevItems.filter(item => item.id !== mealId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
