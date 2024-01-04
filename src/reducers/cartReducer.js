const initialState = {
    cartItems: [],
  };

const cartReducer =(state=initialState,action) =>{
    switch(action.type){
        case 'GET_CART':
            return {
                ...state,
                cartItems:state.cartItems
            };
        case 'ADD_TO_CART':
            {
                console.log(action.payload);
                return {
                    ...state,
                    cartItems:[...state.cartItems,action.payload.cartItem]
                };
            }
        case 'REMOVE_TO_CART':
            return {
                ...state,
                cartItems:state.cartItems.filter(item=> item.id!==action.payload.itemId )
            }
        case 'UPDATE_TO_CART':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
                  ),
            }
        case 'CLEAR_CART':
            return{
                ...state,
                cartItems:action.payload.cartItems
            }
        default:
            return state

}
};

export default cartReducer;