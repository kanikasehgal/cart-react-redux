import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducers';

const reducers = combineReducers({
    cart:cartReducer,
    product:productReducer
});

export default reducers;
