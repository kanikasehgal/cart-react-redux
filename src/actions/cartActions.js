export const getcart = () =>{
    return{
        type:'GET_CART',
        payload:{}
    }
}

export const addToCart =(item)=>{
    return{
        type:'ADD_TO_CART',
        payload :{
            cartItem : item
        }
    }
}

export const removeToCart = (itemId) =>{
    return{
        type:'REMOVE_TO_CART',
        payload:{
            itemId: itemId
        }
    }
}

export const updateToCart = (itemId,quantity) => {
    return{
        type:'UPDATE_TO_CART',
        payload:{
            itemId:itemId,
            quantity:quantity
        }
    }
}

export const clearCart =()=>{
    return{
        type:'CLEAR_CART',
        payload :{
            cartItems : []
        }
    }
}