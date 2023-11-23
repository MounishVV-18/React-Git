import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
