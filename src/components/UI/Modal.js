import React, { useEffect, useRef } from 'react';
import { useCart } from '../../store/CartContext';
import { formatPrice } from '../../utils/FormatPrice';
import Button from './Button';


const Modal = ({ closeModal }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();  // Get cart data from CartContext

  // Ref to handle modal dialog element
  const dialogRef = useRef(null);

  // Ensure the modal opens on mount
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  // Function to handle checkout logic 
  const handleCheckout = () => {
    console.log('Proceeding to checkout')
    alert("Function in progress!")
    clearCart()
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
                <div>
                  <p>{item.name} - {item.quantity}</p>
                </div>

                {/* Cart Item Actions: Remove Item */}
                <div className="cart-item-actions">
                  <Button variant="text-button" onClick={() => removeFromCart(item.id)}>
                    -
                  </Button>
                </div>
              </li>
            ))
          )}
        </ul>

        {/* Cart Total */}
        <div className="cart-total">
          <p>Total: {formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))}</p>
        </div>

        {/* Modal Action Buttons */}
        <div className="modal-actions">
          <Button variant="text-button" onClick={closeModal}>Close</Button>
          <Button variant="button" onClick={handleCheckout}>Checkout</Button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
