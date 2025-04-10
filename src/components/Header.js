import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';

import { useCart } from '../store/CartContext';
import Modal from './UI/Modal';

const Header = () => {
  const { cartItems } = useCart(); // Access cartItems from context

  // Calculate total cart quantity by summing the quantity of each meal in the cart
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
 const doesCartHaveItems = cartItems.length > 0

  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="App Logo" />
          <h1>React Food Order App</h1>
        </div>
        <nav>
          {/* Cart button that opens the modal when clicked */}
          <Button variant="text-button" 
          onClick={doesCartHaveItems ? openModal : null}
          disabled= {!doesCartHaveItems} 
          >
            Cart ({totalCartQuantity})
          </Button>
        </nav>
      </header>
      {/* Show the Modal only if isModalOpen is true */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
};

export default Header;
