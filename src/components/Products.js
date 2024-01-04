import React ,{useEffect} from "react";
import ProductItem from './ProductItem';
import deafultImage from '../default.png';
import { useSelector,useDispatch } from "react-redux";
import {fetchProducts } from '../actions/productActions';

const Products = () => { 
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    const products = [
        { id: 1, name: 'Product 1', price: 10 , image:deafultImage},
        { id: 2, name: 'Product 2', price: 20 , image:deafultImage},
        { id: 3, name: 'Product 3', price: 30 , image:deafultImage},
        { id: 4, name: 'Product 4', price: 19 , image:deafultImage},
        { id: 5, name: 'Product 5', price: 29 , image:deafultImage},
        { id: 6, name: 'Product 6', price: 39 , image:deafultImage},
        { id: 7, name: 'Product 7', price: 55 , image:deafultImage},
        { id: 8, name: 'Product 8', price: 76 , image:deafultImage}
      ];

    return(
        <div>
            <h1>Shopping Cart</h1>
            <h2>Products</h2>
            <span>{JSON.stringify(productState)}</span>
            <div className="products">
                {productState && products.map((product) => (
                <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default Products;