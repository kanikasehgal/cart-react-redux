import React, { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';import Cart from './Cart';
import { useDispatch,useSelector } from "react-redux";
import { clearCart } from "../actions/cartActions";
import { Typography } from "@mui/material";


const useStyles = styled({
    paper: {
      position: "absolute",
      left: 0,
      bottom: 0
    }
  });
  

const Headers =() =>{
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalItems = cartItems ? (cartItems.map(item=> item.quantity).reduce((prev,newVal)=> prev + newVal,0)) : 0;
    const total = cartItems ? (cartItems.map(item=> item.quantity *item.price).reduce((prev,newVal)=> prev + newVal,0)) : 0;

    const classes = useStyles();
    const links =[
        {
            name :'Product Redux List',
        },
        {
            name :'Cart',
        }]; 
    
    const onclickCart = (name) =>{
        setOpen(name==='Cart'&& totalItems>0 ? true :false);
        
    }    
    const handleCancel = () => {
        dispatch(clearCart());
        onClose();
      };
 
      const onClose = () => {
        setOpen(false);
      };
        
    return(
        <nav>
            <ul className="flex-container">
                {links.map((item)=>(
                    <li key={item.name} onClick={()=>onclickCart(item.name)}>
                        <div className="flex-container">
                        {item.name==='Cart' && <span className="cartTotal">{totalItems}</span>}
                        <Typography color="white">{item.name}</Typography>
                        </div> 
                    </li>
                ))}
            </ul>
    <Dialog
    classes={{
        paper: classes.paper
      }}
      sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: '100%' } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>Cart</DialogTitle>
      <DialogContent dividers>
       <Cart/>
      </DialogContent>
      <DialogActions>
      <Typography>TOTAL : ${total} </Typography>
      <Button autoFocus  variant="contained" color="secondary" onClick={onClose}>
          Close Cart
        </Button>
        <Button autoFocus variant="contained" color="secondary" onClick={handleCancel}>
          Clear Cart
        </Button>
      </DialogActions>
    </Dialog>
        </nav>
       );

}

export default Headers;