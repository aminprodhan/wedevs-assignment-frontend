import { combineReducers } from 'redux';
import auth from './auth/reducer';
import products from './product/reducer';
export default combineReducers({
    auth,
    products,
});
