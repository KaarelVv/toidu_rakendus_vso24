import React, { useEffect, useRef } from 'react';
import { useCart } from '../../store/CartContext';


const Modal = ({ closeModal }) => {
  const { cartItems, removeFromCart } = useCart();  // Get cart data from CartContext

  // Ref to handle modal dialog element
  const dialogRef = useRef(null);

  // Ensure the modal opens on mount
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();  // showModal is a built-in function for dialog elements
    }
  }, []);

  // Function to handle checkout logic (you can expand this later)
  const handleCheckout = () => {
    console.log('Proceeding to checkout');
  };

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="cart">
        <h2>Your Cart</h2>

        {/* Display cart items or message if empty */}
        <ul>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: €{(item.price * item.quantity).toFixed(2)}</p>
                </div>

                {/* Cart Item Actions: Remove Item */}
                <div className="cart-item-actions">
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))
          )}
        </ul>

        {/* Cart Total */}
        <div className="cart-total">
          <p>Total: €{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>

        {/* Modal Action Buttons */}
        <div className="modal-actions">
          <button className="text-button" onClick={closeModal}>Close</button>
          <button className="button" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
