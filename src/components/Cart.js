import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateToCart,removeToCart } from "../actions/cartActions";
import Button from '@mui/material/Button';

const Cart = () =>{ 
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const incrementClick = (item) =>{
        dispatch(updateToCart(item.id, item.quantity + 1));
    }
    const decrementClick = (item) =>{
        if(item.quantity>1){
            dispatch(updateToCart(item.id, item.quantity - 1));
        }else {
            dispatch(removeToCart(item.id));
        }
    }
    const cartQuantityChange =(item,e) =>{
        const re = /^[0-9\b]+$/;
        if(re.test(e.target.value)){
            if(e.target.value<=0){
                dispatch(removeToCart(item.id));
            }else{
                dispatch(updateToCart(item.id,e.target.value));
            }
        }
    }
    return(
        
        <div>
            <ul>
            {cartItems && cartItems.map((item) => (
                <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                    <div  className="cart_quantity">
                    <Button variant="contained" color="primary" onClick={()=>incrementClick(item)}>+</Button>
                    <input type="text"  pattern="[0-9]{1,3}" maxLength="3" value={item.quantity} onChange={(event)=>cartQuantityChange(item,event)}/>
                    <Button variant="contained" color="primary" onClick={()=>decrementClick(item)}>-</Button>
                    </div>
                </li>
            ))}
            </ul>
            
      </div>
    );

}

export default Cart;