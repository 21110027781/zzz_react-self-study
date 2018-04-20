import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import pagingProductReducer from './pagingProductReducer';
import updateProductReducer from './updateProductReducer';
import modalProductReducer from './modalProductReducer';
import cartProductReducer from './cartProductReducer';

const appReducers = combineReducers({
    productsReducer,
    pagingProductReducer,
    updateProductReducer,
    modalProductReducer,
    cartProductReducer
})

export default appReducers;