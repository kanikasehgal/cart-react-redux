// ProductItem.js
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, updateToCart } from '../actions/cartActions';
import deafultImage from '../default.png';
 
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems  = useSelector(state => state.cart.cartItems)

  const handleAddToCart = () => {
    const existingItem = cartItems && cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // If item already in cart, update the quantity
      dispatch(updateToCart(product.id, existingItem.quantity + 1));
    } else {
      // If item not in cart, add to cart
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <div className="product-card">
      <img src={deafultImage} alt={product.name} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>

  );
};

export default ProductItem;
