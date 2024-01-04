import axios from 'axios';
export const GET_PRODUCT = 'GET_PRODUCT';

export const fetchProducts = () =>{

  return (dispatch) => {
    axios.get('https://vn3jkbgqu5.execute-api.us-east-1.amazonaws.com/dev/products')
      .then((response) => {
        console.log(response.data)
        const products = response.data;
        dispatch({
          type : GET_PRODUCT,
          payload :products
        })})
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg)
        dispatch({
          type : GET_PRODUCT,
          payload :[]
        })
      });
  }
};
